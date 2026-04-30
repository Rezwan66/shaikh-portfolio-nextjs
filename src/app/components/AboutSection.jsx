'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <SectionHeading subtitle="Get to know me a bit better">About Me</SectionHeading>
      <div className="md:grid md:grid-cols-2 gap-12 items-center px-4 xl:px-16">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8 md:mb-0"
        >
          <div className="glass-card p-3 rounded-2xl">
            <Image
              src="/images/about-image.png"
              width={450}
              height={450}
              alt="Shaikh Rezwan workspace"
              className="rounded-xl"
            />
          </div>
        </motion.div>
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          <p className="text-[#94a3b8] text-base lg:text-lg leading-relaxed">
            I&apos;m a <span className="text-white font-medium">Backend-focused Full Stack Developer</span> currently
            working at <span className="text-primary-400 font-medium">SAP</span> in Germany,
            where I contribute to intelligent search systems, data extraction pipelines, and cloud-based infrastructure.
          </p>
          <p className="text-[#94a3b8] text-base lg:text-lg leading-relaxed">
            My journey into tech started with an Electrical Engineering degree in Bangladesh,
            which sparked my curiosity for how systems work under the hood. I then pursued
            a <span className="text-white font-medium">Master&apos;s in Digital Engineering</span> in
            Germany, where I dove deep into web development, LLMs, and software architecture.
            What started as frontend curiosity quickly evolved into a passion for building
            <span className="text-secondary-400 font-medium"> scalable backend systems</span> and
            distributed architectures.
          </p>
          <p className="text-[#94a3b8] text-base lg:text-lg leading-relaxed">
            I thrive on designing reliable APIs, optimizing data pipelines, and containerizing
            services with Docker and Kubernetes. I enjoy the challenge of making complex systems
            performant and maintainable in production environments.
          </p>
          <p className="text-[#94a3b8] text-base lg:text-lg leading-relaxed">
            Outside of coding, you&apos;ll find me at the <span className="text-white font-medium">gym</span> working
            out, <span className="text-white font-medium">traveling</span> to new places,
            capturing moments through <span className="text-white font-medium">photography</span>,
            or unwinding with some <span className="text-white font-medium">gaming</span>.
          </p>
          {/* Quick info cards */}
          <div className="grid grid-cols-2 gap-3 mt-2">
            <div className="glass-card glass-card-hover p-4 rounded-xl text-center">
              <p className="text-2xl mb-1">🏋️</p>
              <p className="text-xs text-[#94a3b8]">Fitness Enthusiast</p>
            </div>
            <div className="glass-card glass-card-hover p-4 rounded-xl text-center">
              <p className="text-2xl mb-1">✈️</p>
              <p className="text-xs text-[#94a3b8]">Travel Lover</p>
            </div>
            <div className="glass-card glass-card-hover p-4 rounded-xl text-center">
              <p className="text-2xl mb-1">📷</p>
              <p className="text-xs text-[#94a3b8]">Photography</p>
            </div>
            <div className="glass-card glass-card-hover p-4 rounded-xl text-center">
              <p className="text-2xl mb-1">🎮</p>
              <p className="text-xs text-[#94a3b8]">Gaming</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default AboutSection;
