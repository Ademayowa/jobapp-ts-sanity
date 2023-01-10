import { Job } from '../typings';

export const fetchJobs = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getJobs`);

  const data = await res.json();
  const jobs: Job[] = data.jobs;

  return jobs;
};
