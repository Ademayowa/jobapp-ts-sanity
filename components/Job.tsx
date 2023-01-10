import { useRouter } from 'next/router';
import { HiOutlineLocationMarker } from 'react-icons/hi';

function Job() {
  // const router = useRouter();

  return (
    <div className='grid grid-cols-8 gap-x-7 px-10 md:mx-10 md:px-12'>
      <div className='col-span-10 mx-auto my-3 cursor-pointer rounded-lg bg-white p-7 shadow-md lg:col-span-4'>
        <div className='flex items-center font-bold text-blueColor'>
          <h2 className='flex flex-1 text-lg font-bold text-blueColor md:text-2xl'>
            UI/UX Designer
          </h2>
          <p>$3k-$6k</p>
        </div>

        <div className='mt-2.5 flex items-center space-x-1'>
          <HiOutlineLocationMarker className='-ml-1 h-5 w-5 text-sky-500' />
          <p className='text-base text-grayColor md:text-lg'>England UK</p>
        </div>

        <div className='mt-2.5 text-grayColor'>
          <p>Date posted: June 20, 2022 </p>
        </div>

        <p className='mt-2.5 !w-full text-base leading-8 text-grayColor md:w-3/4'>
          We are looking for a front end developer with some experience in
          JavaScript, React/Angular technologies to join a dynamic team within a
          digital agency.
        </p>

        <div className='mt-2.5 flex'>
          <button className='rounded bg-red-500 px-5 py-2 font-light text-white'>
            View job
          </button>
        </div>
      </div>
    </div>
  );
}

export default Job;
