'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import '../styles/componentStyles.css';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const HeroSection = () => {
  const [showName, setShowName] = useState(true);
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        {/* text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-2xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{' '}
            </span>
            {/* <span>Shaikh Rezwan</span> */}
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Shaikh Rezwan',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Web Developer',
                1000,
                'React Developer',
                1000,
                'MERN Developer',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
            {/* <span>Developer</span> */}
          </h1>
          <p className="text-[#ADB7BE] mb-6 text-sm sm:text-xl tracking-wider font-bold italic">
            Developer by Passion, <br className="sm:block lg:hidden hidden" />{' '}
            Engineer by Mind!
          </p>
          {/* <p className="text-white text-base sm:text-lg mb-6">
            Aspiring MERN Stack Developer, eager on building effective and
            creative user interfaces with React, Next.js, HTML5, CSS3,
            JavaScript, Express and MongoDB.
          </p> */}
          <div>
            <Link
              to="about"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              <button className="px-6 py-3 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-secondary-500 via-tertiary-500 to-primary-500 text-white hover:text-black">
                Learn More
              </button>
            </Link>

            <button className="px-1 py-1 rounded-full w-full sm:w-fit bg-gradient-to-br from-secondary-500 via-tertiary-500 to-primary-500 hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-gradient-to-bl from-secondary-500 via-tertiary-500 to-primary-500  rounded-full px-5 py-2">
                Download Resume
              </span>
            </button>
          </div>
        </motion.div>
        {/* image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-6 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[325px] lg:h-[325px] relative overflow-hidden border-4 border-primary-500 glow-border">
            <Image
              src="/images/noBgProfile.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={500}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default HeroSection;
