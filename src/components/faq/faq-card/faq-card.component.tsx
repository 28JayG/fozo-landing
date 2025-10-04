import React, { FC, useState } from 'react';

interface Props {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

const FAQToggleIcon = ({ open }: { open?: boolean }) => {
  return (
    <div className='h-10 w-10 rounded-lg cursor-pointer overflow-hidden font-bold text-2xl select-none'>
      {open ? (
        <div className='bg-[#F1F4E6] h-full w-full text-primary flex items-center justify-center'>
          +
        </div>
      ) : (
        <div className='h-full w-full bg-primary text-white flex items-center justify-center'>
          -
        </div>
      )}
    </div>
  );
};

const FAQCard: FC<Props> = ({ question, answer, defaultOpen }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className='bg-white flex flex-col p-8 rounded-2xl shadow-lg'>
      <div
        className='flex items-center justify-between'
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className='text-2xl font-medium'>{question}</p>
        <FAQToggleIcon open={isOpen} />
      </div>
      {isOpen && (
        <div className='text-xl text-[#6F6C90] font-medium'>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQCard;
