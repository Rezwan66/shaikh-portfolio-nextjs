import Image from 'next/image';

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* text */}
        <div className="col-span-7 place-self-center">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            Hello, I&apos;m Shaikh
          </h1>
          <p className="text-[#ADB7BE] mb-6 text-lg lg:text-xl tracking-wider font-bold">
            Developer by Passion, Engineer by Mind!
          </p>
          <p className="text-white lg:text-lg mb-4">
            Aspiring MERN Stack Developer and Digital Engineering graduate
            student, eager on building effective and creative user interfaces
            with React, Next.js, HTML5, CSS3, JavaScript, Express and MongoDB.
          </p>
          <div>
            <button className="px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-black">
              Learn More
            </button>
            <button className="px-6 py-3 rounded-full bg-transparent hover:bg-slate-800 text-white border border-white">
              Download Resume
            </button>
          </div>
        </div>
        {/* image */}
        <div className="col-span-5 place-self-center mt-6 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative">
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
