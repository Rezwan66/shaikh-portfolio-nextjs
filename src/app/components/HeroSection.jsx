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
          <p className="text-white lg:text-lg">
            Aspiring MERN Stack Developer and Digital Engineering graduate
            student, seeking a full-time junior web developer position or
            internship. Eager on building effective and creative user interfaces
            with React, Next.js, HTML5, CSS3, JavaScript, Express and MongoDB.
          </p>
        </div>
        {/* image */}
        <div className="col-span-5"></div>
      </div>
    </section>
  );
};
export default HeroSection;
