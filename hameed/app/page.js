import EntryScreenAnimation from '@/components/entryScreen';
import Image from 'next/image';
import Hamburger from '../public/hamburger.svg';
import HomeScreenComponent from '@/components/heroScreen';


export default function Home() {
  return (
    <main>
      {/* <main className="flex min-h-screen flex-col items-center justify-between "></main> */}
      <EntryScreenAnimation />
      <div className="z-10 w-full items-center justify-between font-mono lg:flex px-10 sm:px-24 py-10">
        <div className="flex items-center justify-between sm:w-[60%] m-auto border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static rounded-3xl border bg-gray-200 py-2 px-4 lg:dark:bg-zinc-800/30">
          <p className="text-20px font-medium">Hameed</p>
          <Image src={Hamburger} alt='hamburger menu' />
        </div>
      </div>
      <HomeScreenComponent />
    </main>
  )
}
