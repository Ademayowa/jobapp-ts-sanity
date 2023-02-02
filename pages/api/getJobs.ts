import type { NextApiRequest, NextApiResponse } from 'next';
import { client } from '@/lib/sanity.client';
import { groq } from 'next-sanity';
import { Job } from '../../typings';

// Fetch jobs from sanity CMS using groq
const jobQuery = groq`
*[_type == "job"] {
  _id,
  ...
} | order(_createdAt desc)
`;

type Data = {
  jobs: Job[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const jobs: Job[] = await client.fetch(jobQuery);
  // console.log(jobs);
  res.status(200).json({ jobs });
}
