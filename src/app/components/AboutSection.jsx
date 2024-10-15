'use client';
import Image from 'next/image';
import { useState, useTransition } from 'react';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-6">
          <h3>
            <i>
              <strong>Frontend:</strong>
            </i>
          </h3>
          <ul className="list-disc pl-2 space-y-1">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript / TypeScript</li>
            <li>React.js</li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <h3>
            <i>
              <strong>Backend:</strong>
            </i>
          </h3>
          <ul className="list-disc pl-2 space-y-1">
            <li>Node.js</li>
            <li>Express</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul className="list-disc pl-2 space-y-4">
        <li>
          <ul className="space-y-2">
            <li>
              <strong>M.Sc. Digital Engineering</strong>
            </li>
            <li className="text-sm">
              <i>Otto von Guericke University, Magdeburg, Germany</i>
            </li>
          </ul>
        </li>
        <li>
          <ul className="space-y-2">
            <li>
              <strong>B.Sc. Electrical Engineering</strong>
            </li>
            <li className="text-sm">
              <i>IUT, Bangladesh</i>
            </li>
          </ul>
        </li>
      </ul>
    ),
  },
  {
    title: 'Experience',
    id: 'experience',
    content: (
      <ul className="list-disc pl-2 space-y-4">
        <li>
          <ul className="space-y-2">
            <li>
              <strong>Working Student - Intelligent Search Developer</strong>
            </li>
            <li className="text-sm">
              <i>
                <strong>Company:</strong> SAP, Walldorf, Baden-Württemberg
              </i>
            </li>
          </ul>
        </li>
        <li>
          <ul className="space-y-2">
            <li>
              <strong>Student Assistant - Infrastructure and Methods</strong>
            </li>
            <li className="text-sm">
              <i>
                <strong>Company:</strong> DZHW (German Centre for Higher
                Education Research and Science Studies)
              </i>
            </li>
          </ul>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = id => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 lg:pb-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="about image"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Aspiring MERN Stack Developer and Digital Engineering graduate
            student, seeking a full-time junior web developer position or
            internship. Eager on building effective and creative user interfaces
            with React, HTML5, CSS3, JavaScript, Express and MongoDB.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              active={tab === 'skills'}
              selectTab={() => handleTabChange('skills')}
            >
              Skills
            </TabButton>
            <TabButton
              active={tab === 'education'}
              selectTab={() => handleTabChange('education')}
            >
              Education
            </TabButton>
            <TabButton
              active={tab === 'experience'}
              selectTab={() => handleTabChange('experience')}
            >
              Experience
            </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find(t => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
