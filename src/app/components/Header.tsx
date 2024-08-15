import Link from 'next/link';
import SiteStrings from '../constants/SiteStrings';

export default function Header() {

  return (
    <nav className='Header bg-blur fixed inset-x-0 top-0 z-50 border-b border-grey-600 bg-grey-800 bg-opacity-60'>
      <div className='flex flex-wrap items-center justify-between'>
        <Link href='/' className='flex items-center'>
          <span className='self-center whitespace-nowrap bg-gradient-to-r from-purple-400 to-primary bg-clip-text px-4 py-3 text-2xl text-grey-100 text-transparent hover:opacity-80'>
            <b>{SiteStrings.SiteName}</b>
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
