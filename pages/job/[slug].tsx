import Layout from '@/components/Layout';
import { client } from '@/lib/sanity.client';
import { GetStaticProps } from 'next';
import { Job } from '../../typings';

interface Props {
  job: Job;
}

export default function JobDetails() {
  return (
    <Layout title='Job Details'>
      <div>title here...</div>

      {/* <h2>Job Details: </h2> */}
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const query = `*[_type == "job"]{ 
    _id,
    slug {
      current 
    }
  } `;

  const jobs = await client.fetch(query);

  const paths = await jobs.map((job: Job) => ({
    params: {
      slug: job.slug.current,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `
  *[_type == "job" && slug.current == $slug][0]{ 
    _id,
    title,
    location,
    salary,
    description
  } 
  `;

  const job = await client.fetch(query, {
    slug: params?.slug,
  });

  if (!job) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      job,
    },
    revalidate: 60,
  };
};
