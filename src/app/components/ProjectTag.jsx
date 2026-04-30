const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? 'text-white border-primary-500 bg-primary-500/10'
    : 'text-[#94a3b8] border-[#1e293b] hover:border-[#94a3b8] hover:text-white';
  return (
    <button
      onClick={() => onClick(name)}
      className={`${buttonStyles} rounded-full border px-5 py-2 text-sm font-medium cursor-pointer transition-all`}
    >
      {name}
    </button>
  );
};
export default ProjectTag;
