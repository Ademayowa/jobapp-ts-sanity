import { useState, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import axios from 'axios';
import { BASE_URL } from '@/utils/index';
import { useRouter } from 'next/router';
import { IUser, Video } from '../../typings';

function Search({ videos }: { videos: Video[] }) {
  const router = useRouter();
  // const { searchTerm }: any = router.query;

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const getResults = async () => {
      if (searchTerm === '') {
        setSearchResults([]);
      } else {
        const res = await fetch(`/api/search?q=${searchTerm}`);
        const results = await res.json();
        setSearchResults(results);
      }
    };

    getResults();
  }, [searchTerm]);

  return (
    <div className='relative mx-12 -mt-10 flex flex-col justify-between rounded-lg bg-white px-5 py-10 shadow-lg md:flex-row md:p-5'>
      <div className='flex items-center space-x-2'>
        <BsSearch className='hidden h-5 w-5 text-sky-500 md:block' />
        <input
          type='text'
          placeholder='Search jobs'
          className='mb-4 w-full rounded-md border border-sky-500 bg-transparent pl-5 leading-10 outline-none md:mb-0 md:border-none md:pl-0'
        />
      </div>

      <div className='flex items-center space-x-2 md:border-l-4 md:border-blue-200'>
        <HiOutlineLocationMarker className='ml-4 hidden h-5 w-5 text-sky-500 md:block' />
        <input
          type='text'
          placeholder='city or state'
          className='mb-4 w-full rounded-md border border-sky-500 bg-transparent pl-5 leading-10 outline-none md:mb-0 md:border-none md:pl-0'
        />
      </div>

      <div className='mx-1 flex flex-auto items-center md:mx-0 md:flex-none'>
        <button className='flex flex-auto justify-center rounded bg-red-500 px-5 py-2.5 font-bold text-white'>
          Find jobs
        </button>
      </div>
    </div>
  );
}

export const getServerSideProps = async ({
  params: { searchTerm },
}: {
  params: { searchTerm: string };
}) => {
  const res = await axios.get(`${BASE_URL}/api/search/${searchTerm}`);

  return {
    props: { videos: res.data },
  };
};

export default Search;
