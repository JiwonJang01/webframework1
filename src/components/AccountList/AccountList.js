import { useEffect, useState } from "react";
import AccountListItem from "./AccountListItem";
import AccountRegister from "./AccountRegister";
import "../../styles/AccountList/AccountList.css";
import { useParams } from "react-router-dom";
import { useData } from "../../store/store";
import { MainButton } from "../../components/MainButton";

export default function AccountList() {
  const [register, setRegister] = useState(false); // false&true -> false:가계부, true:추가하기 - boolean|| object(info) - object : 수정하기
  const [renderData, setRenderData] = useState([]);
  const { date } = useParams();
  const store = useData();

  useEffect(() => {
    const data = store.data; // array
    let checker = false;
    data.forEach((d, i) => {
      if (Number(date) === d.date) {
        setRenderData(d.data.account);
        store.setCurrentDataIndex(i);
        checker = true;
      }
    });
    if (!checker) store.setCurrentDataIndex(null);
  }, [store.data, register, date]);

  return (
    <>
      <div className="AccountList" style={{ width: "50%" }}>
        {!register ? (
          <>
            <div
              className="usageList"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "right",
                alignItems: "right",
                minHeight: "50vh",
                padding: "40px 20px",
                marginTop: "5px",
                width: "80%",
              }}
            >
              <label>가계부 </label>
              <hr></hr>
              {/* 목록 렌더링 */}
              <ul style={{ height: "100%" }}>
                {renderData.length > 0 ? (
                  renderData.map((inf, i) => (
                    <AccountListItem
                      key={i}
                      inf={inf}
                      index={i}
                      register={register}
                      setRegister={setRegister}
                    />
                  ))
                ) : (
                  <div
                    style={{
                      height: "100%",
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "28px",
                      fontWeight: "bold",
                      position: "relative",
                    }}
                  >
                    <div style={{ position: "relative" }}>
                      아직 기록이 없어요!
                    </div>
                  </div>
                )}
              </ul>
              {/* 목록 렌더링 */}
            </div>
            {/* <button
              className="add"
              onClick={() => {
                setRegister(true);
              }}
            >
              추가
            </button> */}
            <MainButton
              name="추가"
              onClick={() => {
                setRegister(true);
              }}
            />
          </>
        ) : (
          <AccountRegister register={register} setRegister={setRegister} />
        )}
      </div>
    </>
  );
}
