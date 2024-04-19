import Image from 'next/image';

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        {/* text */}
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-blue-600">
              Hello, I&apos;m{' '}
            </span>
            Shaikh
          </h1>
          <p className="text-[#ADB7BE] mb-6 text-lg sm:text-xl tracking-wider font-bold">
            Developer by Passion, Engineer by Mind!
          </p>
          <p className="text-white text-base sm:text-lg mb-6">
            Aspiring MERN Stack Developer, eager on building effective and
            creative user interfaces with React, Next.js, HTML5, CSS3,
            JavaScript, Express and MongoDB.
          </p>
          <div>
            <button className="px-6 py-3 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-rose-500 text-white hover:bg-slate-200">
              Learn More
            </button>
            <button className="px-1 py-1 rounded-full w-full sm:w-fit bg-gradient-to-br from-blue-500 via-purple-500 to-rose-500 hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download Resume
              </span>
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
