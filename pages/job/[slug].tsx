import Link from 'next/link';
import { client } from '@/lib/sanity.client';
import Layout from '@/components/Layout';
import { GetStaticProps } from 'next';
import { BsArrowLeft } from 'react-icons/bs';
import { MdMonetizationOn } from 'react-icons/md';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { Job } from '../../typings';

interface Props {
  job: Job;
}

export default function JobDetails({ job }: Props) {
  return (
    <Layout title={job.title}>
      <div className='mx-auto mt-10 w-10/12 rounded-md bg-white shadow-md'>
        <div className='px-10 py-4 md:mx-10 md:px-12'>
          <div className='my-4'>
            <Link href='/'>
              <a>
                <BsArrowLeft className='my-5 h-5 w-5 cursor-pointer text-[#EF4444]' />
              </a>
            </Link>
            <h2 className='mt-2 text-lg font-bold text-blueColor md:text-2xl'>
              {job.title}
            </h2>

            <div className='mt-2 flex items-center space-x-2'>
              <HiOutlineLocationMarker className='-ml-1 h-5 w-5 text-blue-500' />
              <p className='text-base text-grayColor md:text-lg'>
                {job.location}
              </p>
            </div>

            <div className='mt-2 flex items-center space-x-2'>
              <MdMonetizationOn className='-ml-1 h-5 w-5 text-blue-500' />
              <p className='text-base text-grayColor md:text-lg'>
                {job.salary}
              </p>
            </div>
          </div>
        </div>
        <hr className='border-b border-red-400' />

        <div className='job-post px-10 py-4 text-grayColor md:mx-10 md:px-12'>
          <div className='mt-5 text-sm !leading-9 md:text-base'>
            <p className='max-w-4xl'>{job.description}</p>
            <h4 className='my-4 font-bold'>Job Requirement</h4>
          </div>
        </div>
      </div>
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
