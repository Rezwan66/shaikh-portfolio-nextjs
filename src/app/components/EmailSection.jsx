import Link from 'next/link';
import GitHubIcon from '../../../public/github-icon.svg';
import LinkedinIcon from '../../../public/linkedin-icon.svg';
import Image from 'next/image';

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
      <div>
        <h5 className="text-xl font-bold text-white my-2">
          {' '}
          Let&apos;s Connect{' '}
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I am currently looking for new opportunities to collaborate on, so my
          inbox is always open. Please feel free to reach out through this form.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/Rezwan66">
            <Image src={GitHubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/shaikhrezwan">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      {/* contact form */}
      <div></div>
    </section>
  );
};
export default EmailSection;
