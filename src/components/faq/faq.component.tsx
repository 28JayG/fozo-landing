import FAQCard from './faq-card/faq-card.component';

const faqs = [
  {
    question: 'What is a mystery bag?',
    answer:
      'A Mystery Bag is a surprise meal you get at a big discount from your favorite restaurants and brands.',
  },
  {
    question: 'How does Fozo work?',
    answer:
      'Restaurants and brands list limited-time offers on Fozo every day. You can browse, book, and pick up your favorite deals directly through the app.',
  },
  {
    question: 'Is the food fresh and safe?',
    answer:
      'Yes! Every item on Fozo is freshly prepared or packaged, following the same quality and hygiene standards as regular menu orders.',
  },
  {
    question: 'Why are the prices so low?',
    answer:
      'We make it easy for restaurants and brands to offer exclusive time-based discounts, giving you premium food and products at pocket-friendly prices.',
  },
  {
    question: 'Where is Fozo available?',
    answer:
      'Fozo is currently live in Bangalore — in areas like HSR, Koramangala, Marathahalli, and Whitefield — with more cities coming soon.',
  },
  {
    question: 'How can my restaurant or brand join Fozo?',
    answer:
      'Just fill out the Partner With Us form on our website. Our team will connect with you to get your store live and ready to offer deals within days.',
  },
];

const FAQ = () => {
  return (
    <section
      id='faq'
      className='w-full bg-secondary pt-16 lg:pt-32 pb-16 relative flex flex-col items-center'
    >
      <div className='flex flex-col items-center w-full text-center px-4'>
        <p className='font-bold text-xl lg:text-2xl text-black'>
          Frequently asked Questions
        </p>
        <p className='font-black-hans font-bold text-2xl lg:text-[44px] text-brand-orange mb-8 lg:mb-16'>
          Most Asked Questions
        </p>
      </div>
      <div className='max-width-container bg-[#FAE7CC] rounded-3xl py-20! px-11! flex flex-col gap-6 xl:flex-row'>
        <div className='flex flex-col gap-6 grow basis-1/2'>
          {faqs.slice(0, faqs.length / 2).map((faq) => (
            <FAQCard key={faq.question} {...faq} />
          ))}
        </div>
        <div className='flex flex-col gap-6 grow basis-1/2'>
          {faqs.slice(faqs.length / 2).map((faq) => (
            <FAQCard key={faq.question} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
