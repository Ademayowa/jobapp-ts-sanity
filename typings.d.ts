import { Slug } from 'sanity';

export type Job = {
  _id: string;
  title: string;
  location: string;
  salary: string;
  description: string;
  slug: {
    current: string;
  };
};
