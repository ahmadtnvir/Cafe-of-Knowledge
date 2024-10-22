import Profile from "../../assets/images/profile.png";
const Header = () => {
  return (
    <div className="flex justify-between items-center mb-[34px]">
      <h1 className="text-4xl text-emerald-500 font-bold">Knowledge Cafe</h1>
      <img src={Profile} alt="" />
    </div>
  );
};

export default Header;
