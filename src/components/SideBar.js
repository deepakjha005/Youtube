import TileComponent from "./TileComponent";
export const hTSection1 = ["Home", "Shorts", "Subscriptions"];
export const hTSection2 = ["History", "Playlist", "Watch later"];
export const hTSection3 = ["Music", "Movies", "Shopping"];
export const hTSection4 = ["Music", "Movies", "Shopping"];
export const hTSection5 = ["Music", "Movies", "Shopping"];
export const hTSection6 = ["Music", "Movies", "Shopping"];
export const hTSection7 = ["Music", "Movies", "Shopping"];
export const hTSection8 = ["Music", "Movies", "Shopping"];

const SideBar = () => {
  return (
    <div className=" w-[200px]  overflow-y-auto h-full ">
      {hTSection1.map((title) => (
        <TileComponent title={title} />
      ))}
      <div className="bg-gray-100 h-0.5"></div>
      {hTSection2.map((title) => (
        <TileComponent title={title} />
      ))}
      <div className="bg-gray-100 h-0.5"></div>
      {hTSection3.map((title) => (
        <TileComponent title={title} />
      ))}
      <div className="bg-gray-100 h-0.5"></div>
      {hTSection4.map((title) => (
        <TileComponent title={title} />
      ))}
      <div className="bg-gray-100 h-0.5"></div>
      {hTSection5.map((title) => (
        <TileComponent title={title} />
      ))}
      <div className="bg-gray-100 h-0.5"></div>
      {hTSection6.map((title) => (
        <TileComponent title={title} />
      ))}
      <div className="bg-gray-100 h-0.5"></div>
      {hTSection7.map((title) => (
        <TileComponent title={title} />
      ))}
      <div className="bg-gray-100 h-0.5"></div>
      {hTSection8.map((title) => (
        <TileComponent title={title} />
      ))}
    </div>
  );
};
export default SideBar;
