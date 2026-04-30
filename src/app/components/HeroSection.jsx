'use client';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import '../styles/componentStyles.css';

const HeroSection = () => {
  return (
    <section className="lg:py-16 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8">
        {/* text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="col-span-7 place-self-center text-center sm:text-left justify-self-start"
        >
          <p className="text-primary-400 text-sm sm:text-base font-medium tracking-widest uppercase mb-3">
            Full Stack Developer
          </p>
          <h1 className="text-white mb-4 text-3xl sm:text-5xl lg:text-6xl xl:text-7xl lg:leading-tight font-extrabold font-[family-name:var(--font-space)]">
            Hi, I&apos;m{' '}
            <span className="gradient-text">
              Shaikh Rezwan
            </span>
          </h1>
          <div className="text-[#94a3b8] text-lg sm:text-xl lg:text-2xl mb-2 h-10">
            <TypeAnimation
              sequence={[
                'I build scalable backends',
                2000,
                'I craft web experiences',
                2000,
                'I engineer cloud systems',
                2000,
                'I develop at SAP',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-medium"
            />
          </div>
          <p className="text-[#64748b] mb-8 text-sm sm:text-base max-w-lg">
            Backend-focused Full Stack Developer at SAP, building scalable data-driven applications
            with JavaScript, TypeScript, Python, and cloud infrastructure.
          </p>
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <button className="px-8 py-3 rounded-full w-full sm:w-fit bg-gradient-to-r from-primary-500 via-secondary-500 to-tertiary-500 text-white font-semibold hover:opacity-90 transition-opacity cursor-pointer">
                Get In Touch
              </button>
            </Link>
            <a
              href="/images/Shaikh_Rezwan_Fullstack_Developer_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-8 py-3 rounded-full w-full sm:w-fit border border-[#1e293b] text-[#94a3b8] hover:text-white hover:border-primary-500 transition-all cursor-pointer bg-transparent">
                View Resume
              </button>
            </a>
          </div>
          {/* Social Links */}
          <div className="flex gap-4 justify-center sm:justify-start">
            <a
              href="https://github.com/Rezwan66"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-[#1e293b] flex items-center justify-center text-[#94a3b8] hover:text-white hover:border-primary-500 hover:shadow-[0_0_12px_rgba(59,130,246,0.3)] transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/shaikhrezwan/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-[#1e293b] flex items-center justify-center text-[#94a3b8] hover:text-white hover:border-primary-500 hover:shadow-[0_0_12px_rgba(59,130,246,0.3)] transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="https://medium.com/@shaikhrezwan66"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-[#1e293b] flex items-center justify-center text-[#94a3b8] hover:text-white hover:border-primary-500 hover:shadow-[0_0_12px_rgba(59,130,246,0.3)] transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
              </svg>
            </a>
          </div>
        </motion.div>
        {/* image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="col-span-5 place-self-center mt-6 lg:mt-0"
        >
          <div className="relative">
            {/* Glow ring behind image */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500/20 via-secondary-500/10 to-tertiary-500/20 blur-2xl scale-110"></div>
            <div className="rounded-full bg-surface w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative overflow-hidden border-2 border-primary-500/30 glow-border animate-float">
              <Image
                src="/images/noBgProfile.png"
                alt="Shaikh Rezwan - Full Stack Developer"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={320}
                height={520}
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default HeroSection;
