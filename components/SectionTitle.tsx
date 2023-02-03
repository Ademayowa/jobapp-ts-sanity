interface Props {
  title: string;
}

export default function SectionTitle({ title }: Props) {
  return (
    <div className='mt-20 px-10 md:mx-10 md:px-12 lg:mt-28'>
      <h2 className='text-2xl font-bold text-blueColor md:text-3xl'>{title}</h2>
    </div>
  );
}
