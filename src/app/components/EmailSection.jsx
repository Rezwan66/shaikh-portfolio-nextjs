'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import GitHubIcon from '../../../public/github-icon.svg';
import LinkedinIcon from '../../../public/linkedin-icon.svg';
import MediumIcon from '../../../public/medium-icon-svgrepo-com.svg';
import SectionHeading from './SectionHeading';

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = '/api/send';

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSONdata,
      });

      if (response.status === 200) {
        setEmailSubmitted(true);
      }
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative">
      <SectionHeading subtitle="Let's build something amazing together">
        Get In Touch
      </SectionHeading>

      {/* Ambient glow */}
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary-600/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-tertiary-600/10 rounded-full blur-3xl -z-10"></div>

      <div className="grid md:grid-cols-2 gap-10 px-4 xl:px-16">
        {/* Contact Info */}
        <div>
          <p className="text-[#94a3b8] mb-8 text-base lg:text-lg leading-relaxed">
            I&apos;m always open to discussing new projects, collaboration opportunities,
            or simply having a conversation about technology. Feel free to reach out!
          </p>

          {/* Contact cards */}
          <div className="space-y-4 mb-8">
            <a href="mailto:shaikhrezwan66@gmail.com" className="glass-card glass-card-hover p-4 rounded-xl flex items-center gap-4 block">
              <div className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                <span className="text-lg">📧</span>
              </div>
              <div>
                <p className="text-xs text-[#64748b] uppercase tracking-wider">Email</p>
                <p className="text-white text-sm">shaikhrezwan66@gmail.com</p>
              </div>
            </a>
            <a href="tel:+491789616271" className="glass-card glass-card-hover p-4 rounded-xl flex items-center gap-4 block">
              <div className="w-10 h-10 rounded-full bg-secondary-500/10 flex items-center justify-center flex-shrink-0">
                <span className="text-lg">📱</span>
              </div>
              <div>
                <p className="text-xs text-[#64748b] uppercase tracking-wider">Phone</p>
                <p className="text-white text-sm">+49 178 961 6271</p>
              </div>
            </a>
            <div className="glass-card p-4 rounded-xl flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-tertiary-500/10 flex items-center justify-center flex-shrink-0">
                <span className="text-lg">📍</span>
              </div>
              <div>
                <p className="text-xs text-[#64748b] uppercase tracking-wider">Location</p>
                <p className="text-white text-sm">39104 Magdeburg, Germany</p>
              </div>
            </div>
          </div>

          {/* Social links */}
          <div className="flex gap-3">
            <Link
              href="https://github.com/Rezwan66"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-[#1e293b] flex items-center justify-center hover:border-primary-500 hover:shadow-[0_0_12px_rgba(59,130,246,0.3)] transition-all"
            >
              <Image src={GitHubIcon} alt="GitHub" width={20} height={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/shaikhrezwan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-[#1e293b] flex items-center justify-center hover:border-primary-500 hover:shadow-[0_0_12px_rgba(59,130,246,0.3)] transition-all"
            >
              <Image src={LinkedinIcon} alt="LinkedIn" width={20} height={20} />
            </Link>
            <Link
              href="https://medium.com/@shaikhrezwan66"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-[#1e293b] flex items-center justify-center hover:border-primary-500 hover:shadow-[0_0_12px_rgba(59,130,246,0.3)] transition-all"
            >
              <Image src={MediumIcon} alt="Medium" width={20} height={20} />
            </Link>
          </div>
        </div>

        {/* Contact Form */}
        <div className="glass-card p-6 md:p-8 rounded-xl">
          {emailSubmitted ? (
            <div className="flex flex-col items-center justify-center h-full py-12 text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-white text-xl font-bold mb-2">Message Sent!</h3>
              <p className="text-[#94a3b8] text-sm">
                Thank you for reaching out. I&apos;ll get back to you soon!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
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
                  className="bg-[#0a0a0f] border border-[#1e293b] placeholder-[#64748b] text-gray-100 text-sm rounded-lg block w-full p-3 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:outline-none transition-colors"
                  placeholder="john@doe.com"
                />
              </div>
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
                  className="bg-[#0a0a0f] border border-[#1e293b] placeholder-[#64748b] text-gray-100 text-sm rounded-lg block w-full p-3 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:outline-none transition-colors"
                  placeholder="Regarding..."
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="text-white block mb-2 text-sm font-medium"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={5}
                  className="bg-[#0a0a0f] border border-[#1e293b] placeholder-[#64748b] text-gray-100 text-sm rounded-lg block w-full p-3 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:outline-none transition-colors resize-none"
                  placeholder="Type your message here..."
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:opacity-90 disabled:opacity-50 text-white font-semibold py-3 px-6 rounded-lg w-full transition-opacity"
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
export default EmailSection;
