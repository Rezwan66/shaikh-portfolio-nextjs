'use client';
import Image from 'next/image';
import { useState, useTransition } from 'react';

const AboutSection = () => {
  const [tab, setTab] = useState('skills');
  const [startTransition, isPending] = useTransition();

  const handleTabChange = id => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <>
      <section className="text-white">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          <Image
            src="/images/about-image.png"
            width={300}
            height={300}
            alt="about image"
          />
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-base lg:text-lg">
              Aspiring MERN Stack Developer and Digital Engineering graduate
              student, seeking a full-time junior web developer position or
              internship. Eager on building effective and creative user
              interfaces with React, HTML5, CSS3, JavaScript, Express and
              MongoDB.
            </p>
            <div className="flex flex-row mt-8">
              <span className="mr-3 font-semibold hover:text-white text-[#ADB7BE] cursor-pointer border-b border-yellow-500">
                Skills
              </span>
              <span className="mr-3 font-semibold hover:text-white text-[#ADB7BE] cursor-pointer border-b border-yellow-500">
                Education
              </span>
              <span className="mr-3 font-semibold hover:text-white text-[#ADB7BE] cursor-pointer border-b border-yellow-500">
                Experience
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default AboutSection;
