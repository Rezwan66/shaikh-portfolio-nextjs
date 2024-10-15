import { Link } from 'react-scroll';

const NavLink = ({ href, title }) => {
  return (
    <Link
      to={href}
      activeClass="active"
      spy={true}
      smooth={true}
      offset={-150}
      duration={500}
      className="nav-item block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-lg rounded md:p-0 hover:text-white cursor-pointer"
    >
      {title}
    </Link>
  );
};
export default NavLink;
