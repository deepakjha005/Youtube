import TileComponent from "./TileComponent";
export const hamburgerTitleOneSection = ["Home", "Shorts", "Subscriptions"];
export const hamburgerTitleTwoSection = ["History", "Playlist", "Watch later"];
export const hamburgerTitleThreeSection = ["Music", "Movies", "Shopping"];

const SideBar = () => {
  return (
    <div className="h-screen w-[10%] border-gray-200 border-r-2 ">
      {hamburgerTitleOneSection.map((title) => (
        <TileComponent title={title} />
      ))}
      <div className="bg-gray-100 h-0.5"></div>
      {hamburgerTitleTwoSection.map((title) => (
        <TileComponent title={title} />
      ))}
      <div className="bg-gray-100 h-0.5"></div>
      {hamburgerTitleThreeSection.map((title) => (
        <TileComponent title={title} />
      ))}
    </div>
  );
};
export default SideBar;
