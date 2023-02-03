import type { GetServerSideProps, NextPage } from 'next';
import Hero from '@/components/Hero';
import Jobs from '@/components/Job';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import { Job } from '../typings';
import { fetchJobs } from '@/utils/fetchJobs';
import Search from '@/components/Search';

interface Props {
  jobs: Job[];
}

export default function HomePage({ jobs }: Props) {
  return (
    <Layout title='Find Gigs | Home'>
      <>
        <Hero />
        <Search />
        <SectionTitle title='Latest Jobs' />
        <Jobs jobs={jobs} />
      </>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const jobs = await fetchJobs();

  return {
    props: {
      jobs,
    },
  };
};
