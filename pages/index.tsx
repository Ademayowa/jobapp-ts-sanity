import Hero from '@/components/Hero';
import Job from '@/components/Job';
import Layout from '@/components/Layout';
import Search from 'pages/search/[searchTerm]';
import SectionTitle from '@/components/SectionTitle';

const Home = () => {
  return (
    <Layout title='Find Gigs | Home'>
      <main>
        <Hero />
        {/* <Search /> */}
        <SectionTitle title='Latest Jobs' />
        <Job />
      </main>
    </Layout>
  );
};

export default Home;
