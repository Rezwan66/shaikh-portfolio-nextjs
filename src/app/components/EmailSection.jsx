import Link from 'next/link';
import GitHubIcon from '../../../public/github-icon.svg';
import LinkedinIcon from '../../../public/linkedin-icon.svg';
import MediumIcon from '../../../public/medium-icon-svgrepo-com.svg';
import Image from 'next/image';

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 md:py-32 gap-4 relative"
    >
      {/* mash */}
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]  from-primary-600 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          {' '}
          Let&apos;s Connect{' '}
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I am currently looking for new opportunities to collaborate on, so my
          inbox is always open. Please feel free to reach out through this form.
        </p>
        <div className="socials flex flex-row gap-2 items-center">
          <Link href="https://github.com/Rezwan66">
            <Image src={GitHubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/shaikhrezwan">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link href="https://medium.com/@shaikhrezwan66">
            <Image src={MediumIcon} alt="Medium Icon" />
          </Link>
        </div>
      </div>
      {/* contact form */}
      <div>
        <form className="flex flex-col gap-6">
          {/* your email */}
          <div>
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="john@doe.com"
            />
          </div>
          {/* subject */}
          <div>
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Regarding..."
            />
          </div>
          {/* message */}
          <div>
            <label
              htmlFor="message"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 overflow-hidden"
              placeholder="Type your message here..."
            />
          </div>
          {/* submit btn */}
          <button
            type="submit"
            className="bg-primary-500 hover:bg-secondary-500 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
export default EmailSection;
