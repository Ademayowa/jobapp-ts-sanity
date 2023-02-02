import Head from 'next/head';
import Navbar from './Navbar';

interface Props {
  title: string;
  description: string;
  keywords: string;
  children: React.ReactNode;
}

export default function Layout({
  title,
  description,
  keywords,
  children,
}: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <link rel='icon' href='/favico.png' />
      </Head>

      <Navbar />
      <>{children}</>
    </>
  );
}

Layout.defaultProps = {
  title: 'Find Gigs',
  description: 'get latest jobs',
  keywords: 'software | admin | health care jobs',
};
