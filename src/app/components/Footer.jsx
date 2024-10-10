import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer z-10 border border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between items-center">
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
      </div>
    </footer>
  );
};
export default Footer;
