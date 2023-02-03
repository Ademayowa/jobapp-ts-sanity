import Layout from '@/components/Layout';
import Link from 'next/link';
import { FaExclamationTriangle } from 'react-icons/fa';

export default function NotFoundPage() {
  return (
    <Layout title='Page Not Found'>
      <div className='my-10 grid place-items-center'>
        <div className='text-2xl'>
          <FaExclamationTriangle className='h-16 w-16 text-red-500' />
        </div>
        <h4 className='font-Lato text-darkGreen4 my-8 text-4xl font-bold'>
          Sorry, there is nothing here.
        </h4>
        <Link href='/'>
          <a
            className='cursor-pointer rounded bg-red-500 px-5 py-2 font-light text-white
            transition duration-1000 ease-in-out hover:bg-red-400'
          >
            Go Back Home
          </a>
        </Link>
      </div>
    </Layout>
  );
}
