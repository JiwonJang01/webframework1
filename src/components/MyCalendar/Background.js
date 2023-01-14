import { useData } from "../../store/store";
import "../../styles/MyCalendar/Background.css";
const BgLayout = ({ index }) => {
  const store = useData();
  return (
    <div
      style={{
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        background: `url('/img/calendar/animal-no-bg/${index}.png')`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        transition: "opacity .3s ease",
        opacity: store.currentColorIndex + 1 === index ? "1" : "0",
      }}
    />
  );
};
export const Background = () => {
  return (
    <div className="bgContainer">
      <BgLayout index={1} />
      <BgLayout index={2} />
      <BgLayout index={3} />
      <BgLayout index={4} />
      <BgLayout index={5} />
      <BgLayout index={6} />
      <BgLayout index={7} />
      <BgLayout index={8} />
      <BgLayout index={9} />
      <BgLayout index={10} />
      <BgLayout index={11} />
      <BgLayout index={12} />
      {/* <div
        style={{
          height: "100%",
          background: `url('/img/calendar/animal/1.png')`,
          transition: "all .3s ease",
          opacity: store.currentColorIndex + 1 === 1 ? "0" : "1",
        }}
      /> */}
      {/* <div
        style={{
          height: "100%",
          background: `url('/img/calendar/animal/${
            store.currentColorIndex + 1
          }.png')`,
          transition: "all .3s ease",
          opacity: store.currentColorIndex + 1 === 1 ? "0":"1"
        }}
      /> */}
    </div>
  );
};
