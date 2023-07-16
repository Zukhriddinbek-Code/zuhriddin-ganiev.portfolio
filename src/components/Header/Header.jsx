const Header = () => {
  return (
    <header className="flex items-center w-full h-[80px] leading-[80px]">
      <div className="container">
        <div className="flex items-center justify-between">
          {/*logo*/}
          <div className="flex items-center gap-[10px]">
            <span className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500]">
              M
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
