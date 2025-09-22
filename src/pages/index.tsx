import Header from '@/components/header/header.component';
import Hero from '@/components/hero/hero.component';

export default function Home() {
  return (
    <div className='min-h-screen w-full max-w-full'>
      <div className='pb-[540px] w-full h-full'>
        <Header />
        <Hero />
      </div>
      <div className='absolute left-0 bottom-0 h-[540px]'></div>
    </div>
  );
}
