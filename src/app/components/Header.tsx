import Link from 'next/link';
import Image from 'next/image';
import SiteStrings from '../constants/SiteStrings';

export default function Header() {

  return (
    <nav className='Header bg-blur fixed inset-x-0 top-0 z-50 border-b border-grey-600 bg-grey-800 bg-opacity-60'>
      <div className='flex flex-wrap items-center justify-between'>
        <Link href='/' className='flex items-center'>
          <span className='self-center whitespace-nowrap bg-gradient-to-r from-purple-400 to-primary bg-clip-text px-4 py-3 text-2xl text-grey-100 text-transparent hover:opacity-80'>
            <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/logo.svg"
            alt="Teamscape Travel Logo"
            width={200}
            height={80}
            priority
            />
          </span>
        </Link>

        <Link href='/' className='flex items-center'>
        Home
        </Link>

        <Link href='/about' className='flex items-center'>
        About
        </Link>

        <Link href='/contact' className='flex items-center'>
        Contact
        </Link>

        <div className='mr-4 flex items-center gap-4'>

        </div>
      </div>
    </nav>
  );
}
