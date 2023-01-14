import { useEffect, useState } from "react";
import ScheduleListItem from "./ScheduleListItem";
import ScheduleRegister from "./ScheduleRegister";
import "../../styles/AccountList/AccountList.css";
import { useParams } from "react-router-dom";
import { useData } from "../../store/store";
import { MainButton } from "../../components/MainButton";

export default function ScheduleList() {
  const [register, setRegister] = useState(false); 
  const [renderData, setRenderData] = useState([]);
  const { date } = useParams();
  const store = useData();

  useEffect(() => {
    const data = store.data; // array
    let checker = false;
    data.forEach((d, i) => {
      if (Number(date) === d.date) {
        setRenderData(d.data.schedule);
        store.setCurrentDataIndex(i);
        checker = true;
      }
      if (!checker) store.setCurrentDataIndex(null);
    });
  }, [store.data, register, date]);

  return (
    <>
      <div className="AccountList">
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
              <label>일정</label>
              <hr></hr>
              {/* 목록 렌더링 */}
              <ul>
                {renderData.map((inf, i) => (
                  <ScheduleListItem
                    key={i}
                    inf={inf}
                    index={i}
                    register={register}
                    setRegister={setRegister}
                  />
                ))}
              </ul>
              {/* 목록 렌더링 */}
            </div>
            <MainButton
              name="추가"
              onClick={() => {
                setRegister(true);
              }}
            />
          </>
        ) : (
          <ScheduleRegister register={register} setRegister={setRegister} />
        )}
      </div>
    </>
  );
}
