import Link from 'next/link';
import NavLink from './NavLink';
import Image from 'next/image';

const navLinks = [
  {
    title: 'About',
    path: '#about',
  },
  {
    title: 'Projects',
    path: '#projects',
  },
  {
    title: 'Contact',
    path: '#contact',
  },
];

const Navbar = () => {
  return (
    <nav>
      <div className="flex flex-wrap items-center justify-between mx-auto p-8">
        <Link href={'/'} className="text-5xl text-white font-semibold">
          <Image
            alt="website logo"
            src="/images/logo_web.png"
            width={55}
            height={55}
          />
        </Link>
        <div className="menu block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 flex-row">
            {navLinks.map((link, index) => {
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>;
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
