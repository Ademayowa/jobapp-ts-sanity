function Hero() {
  return (
    <div className='h-72 bg-blueColor pl-10 pt-10 md:pl-12 lg:h-96'>
      <div className='relative lg:pt-5'>
        <h1 className='text-3xl font-bold !leading-tight text-white lg:w-6/12 lg:text-6xl'>
          The Easiest Way To Get Your New Job.
        </h1>

        <p className='!lg:pb-20 mt-5 text-xl font-extralight text-white md:w-9/12 lg:w-5/12'>
          Searching and finding your dream job is now easier than ever. Just
          browse a job and apply with ease.
        </p>

        <div className='hidden lg:block'>
          <div className='absolute -top-10 right-0'>
            <img src={'/shape1.png'} alt='' />
          </div>

          <div className='absolute top-20 right-14'>
            <img src={'/shape2.png'} alt='' />
          </div>

          <div className='absolute top-40 right-24'>
            <img src={'/shape3.png'} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
