export const MainButton = ({ name, onClick }) => {
  return (
    <button onClick={onClick} className="mainbtn">
      <div
        style={{
          position: "relative",
          display: "flex",
          fontFamily: "Gaegu",
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        <p style={{ margin: 0, marginRight: "10px" }}>{name}</p>

        <img
          src="/img/button/heart.png"
          alt="heart"
          style={{ width: 50, height: "auto" }}
        />
      </div>
    </button>
  );
};
