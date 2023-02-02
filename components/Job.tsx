import { useRouter } from 'next/router';
import Link from 'next/link';
import { client } from '@/lib/sanity.client';
import { fetchJobs } from '@/utils/fetchJobs';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { Job } from '../typings';

interface Props {
  jobs: Job[];
}

export default function JobPage({ jobs }: Props) {
  return (
    <div className='grid grid-cols-8 gap-x-7 px-10 md:mx-10 md:px-12'>
      {jobs?.map((job) => (
        <Link href={`/job/${job.slug.current}`} key={job._id}>
          <a className='col-span-10 mx-auto my-3 cursor-pointer rounded-lg bg-white p-7 shadow-md lg:col-span-4'>
            <div className='flex items-center font-bold text-blueColor'>
              <h2 className='flex flex-1 text-lg font-bold text-blueColor md:text-2xl'>
                {job.title}
              </h2>
              <p>{job.salary}</p>
            </div>

            <div className='mt-2.5 flex items-center space-x-1'>
              <HiOutlineLocationMarker className='-ml-1 h-5 w-5 text-sky-500' />
              <p className='text-base text-grayColor md:text-lg'>
                {job.location}
              </p>
            </div>

            {/* <div className='mt-2.5 text-grayColor'>
            <p>Date posted: June 20, 2022 </p>
          </div> */}

            <p className='mt-2.5 !w-full text-base leading-8 text-grayColor md:w-3/4'>
              {job.description}
            </p>

            <div className='mt-2.5 flex'>
              <button className='rounded bg-red-500 px-5 py-2 font-light text-white'>
                View job
              </button>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}
