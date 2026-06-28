import TileComponent from "./TileComponent";
export const hTSection1 = ["Home", "Shorts", "Reset Store"];
export const hTSection2 = ["History", "Playlist", "Watch later"];

const SideBar = () => {
  return (
    <div className=" w-[200px]  overflow-y-auto h-full ">
      {hTSection1.map((title) => (
        <TileComponent title={title} key={title} />
      ))}
      <div className="bg-gray-100 h-0.5"></div>
      {hTSection2.map((title) => (
        <TileComponent title={title} key={title} />
      ))}
    </div>
  );
};
export default SideBar;
