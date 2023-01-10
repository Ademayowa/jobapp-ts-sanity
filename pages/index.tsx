import type { GetServerSideProps, NextPage } from 'next';
import Hero from '@/components/Hero';
import Jobs from '@/components/Job';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import { Job } from '../typings';
import { fetchJobs } from '@/utils/fetchJobs';

interface Props {
  jobs: Job[];
}

const Home = ({ jobs }: Props) => {
  return (
    <Layout title='Find Gigs | Home'>
      <main>
        <Hero />
        {/* <Search /> */}
        <SectionTitle title='Latest Jobs' />
        <Jobs jobs={jobs} />
      </main>
    </Layout>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const jobs = await fetchJobs();

  return {
    props: {
      jobs,
    },
  };
};
