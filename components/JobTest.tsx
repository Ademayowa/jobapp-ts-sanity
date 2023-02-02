import Link from 'next/link';

interface Props {
  title: string;
  location: string;
  salary: string;
  description: string;
  slug: any;
}

function JobTest({ title, slug }: Props) {
  return (
    <div>
      <Link href={`/job/${slug.current}`}></Link>
    </div>
  );
}

export default JobTest;
