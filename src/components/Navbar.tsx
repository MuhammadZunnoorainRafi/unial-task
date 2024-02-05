import Image from 'next/image';
import Logo from '../../public/logo.svg';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Navbar() {
  return (
    <div>
      <div className="w-1/2 flex items-end">
        <nav className="flex flex-[1.7]">
          <Image
            src={Logo}
            height={50}
            width={50}
            alt="Logo image error"
          ></Image>
          <div className="flex flex-grow text-sm  text-slate-500 items-end justify-around">
            <p>About</p>
            <p>Services</p>
            <p>Portfolio</p>

            <Link href="/" className="btn btn-xs btn-secondary">
              Client
            </Link>
            <Link href="/admin" className="btn btn-xs btn-primary ">
              Admin
            </Link>
          </div>
        </nav>
        <div className="flex-[0.5] border-b-2 border-slate-400" />
      </div>
      <div className="w-1/2"></div>
    </div>
  );
}

export default Navbar;
