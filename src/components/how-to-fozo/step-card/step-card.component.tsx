import { FC } from 'react';

interface Props {
  title: string;
  description: string;
  img: string;
}

const StepCard: FC<Props> = ({ title, description, img }) => {
  return (
    <div className='flex flex-col items-center gap-8'>
      <div className='bg-secondary rounded-4xl p-3 max-w-96 h-[440px] w-full'>
        <img
          className='w-full h-full object-cover rounded-4xl overflow-hidden'
          src={img}
          alt=''
        />
      </div>
      <div >
        <p className='text-center text-white font-bold text-2xl'>{title}</p>
        <p className='text-xl text-center font-light text-white'>{description}</p>
      </div>
    </div>
  );
};

export default StepCard;
