import React, { FC, useState } from 'react';

interface Props {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

const FAQToggleIcon = ({ open }: { open?: boolean }) => {
  return (
    <div className='h-6 w-6 shrink-0 lg:h-10 lg:w-10 rounded-lg cursor-pointer overflow-hidden font-bold text-lg lg:text-2xl select-none'>
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
    <div className='bg-white flex flex-col p-4 lg:p-8 rounded-2xl shadow-lg'>
      <div
        className='flex items-center justify-between'
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className='text-lg lg:text-2xl font-medium'>{question}</p>
        <FAQToggleIcon open={isOpen} />
      </div>

      <div
        className={`text-base lg:text-xl text-[#6F6C90] font-medium transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[700px]' : 'max-h-0'
        }`}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default FAQCard;
