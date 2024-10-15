'use client';
import Image from 'next/image';
import Link from 'next/link';
import { animateScroll } from 'react-scroll';

const Footer = () => {
  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };
  return (
    <footer className="footer z-10 border border-t-[#33353F] border-l-transparent border-r-transparent border-b-transparent text-white">
      <div className="p-12 flex justify-between items-center">
        {/* logo */}
        <Link href={'/'} className="text-2xl md:text-5xl font-semibold">
          <Image
            className="rounded-full"
            alt="website logo"
            src="/images/logo_web.png"
            width={55}
            height={55}
          />
        </Link>
        <p className="text-slate-400">
          © Shaikh Rezwan {new Date().getFullYear()}. All rights reserved.
        </p>
        <button
          className="button py-2 px-4 border border-slate-400 rounded-full text-2xl hover:border-primary-500 text-primary-500"
          onClick={scrollToTop}
        >
          ⬆
        </button>
      </div>
    </footer>
  );
};
export default Footer;
