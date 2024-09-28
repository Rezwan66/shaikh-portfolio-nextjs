'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import '../styles/componentStyles.css';

const HeroSection = () => {
  const [showName, setShowName] = useState(true);
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        {/* text */}
        <div className="col-span-8 place-self-center text-center sm:text-left sm:justify-self-start">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
              Hello, I&apos;m{' '}
            </span>
            <span>Shaikh Rezwan</span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                // 'Shaikh Rezwan',
                // 1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Web',
                1000,
                'React',
                1000,
                'MERN Stack',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
            <span>Developer</span>
          </h1>
          <p className="text-[#ADB7BE] mb-6 text-lg sm:text-xl tracking-wider font-bold">
            Developer by Passion, <br className="sm:block lg:hidden hidden" />{' '}
            Engineer by Mind!
          </p>
          {/* <p className="text-white text-base sm:text-lg mb-6">
            Aspiring MERN Stack Developer, eager on building effective and
            creative user interfaces with React, Next.js, HTML5, CSS3,
            JavaScript, Express and MongoDB.
          </p> */}
          <div>
            <button className="px-6 py-3 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 text-white hover:text-black">
              Learn More
            </button>
            <button className="px-1 py-1 rounded-full w-full sm:w-fit bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-500 hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-gradient-to-bl from-orange-500 via-amber-500 to-yellow-500  rounded-full px-5 py-2">
                Download Resume
              </span>
            </button>
          </div>
        </div>
        {/* image */}
        <div className="col-span-4 place-self-center mt-6 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[325px] lg:h-[325px] relative overflow-hidden border-4 border-yellow-500 glow-border">
            <Image
              src="/images/noBgProfile.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
