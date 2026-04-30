const SectionHeading = ({ children, subtitle }) => {
  return (
    <div className="text-center mb-12 md:mb-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space)] mb-4">
        <span className="gradient-text">{children}</span>
      </h2>
      {subtitle && (
        <p className="text-[#94a3b8] text-base md:text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="section-divider w-24 mx-auto mt-4"></div>
    </div>
  );
};
export default SectionHeading;
