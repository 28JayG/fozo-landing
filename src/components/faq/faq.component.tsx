import FAQCard from './faq-card/faq-card.component';

const faqs = [
  {
    question: 'What is a mystery bag?',
    answer: '',
  },
  {
    question: 'What is a mystery bag?',
    answer: '',
  },
  {
    question: 'What is a mystery bag?',
    answer: '',
  },
  {
    question: 'What is a mystery bag?',
    answer: '',
  },
  {
    question: 'What is a mystery bag?',
    answer: '',
  },
  {
    question: 'What is a mystery bag?',
    answer: '',
  },
  {
    question: 'What is a mystery bag?',
    answer: '',
  },
];

const FAQ = () => {
  return (
    <section
      id='faq'
      className='w-full bg-secondary pt-32 pb-16 relative flex flex-col items-center'
    >
      <div className='flex flex-col items-center w-full'>
        <p className='font-bold text-2xl text-black'>
          Frequently asked Questions
        </p>
        <p className='font-black-hans font-bold text-[44px] text-brand-orange mb-16'>
          Most Asked Questions
        </p>
      </div>
      <div className='max-width-container bg-[#FAE7CC] rounded-3xl py-20 px-11 flex flex-col gap-6 xl:flex-row'>
        <div className='flex flex-col gap-6 grow'>
          {faqs.slice(0, faqs.length / 2).map((faq) => (
            <FAQCard {...faq} />
          ))}
        </div>
        <div className='flex flex-col gap-6 grow'>
          {faqs.slice(faqs.length / 2 + 1).map((faq) => (
            <FAQCard {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
