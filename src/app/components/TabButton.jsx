const TabButton = ({ active, selectTab, children }) => {
  return (
    <button className="mr-3 font-semibold hover:text-white text-[#ADB7BE] cursor-pointer border-b border-yellow-500">
      {children}
    </button>
  );
};
export default TabButton;
