import { MainButton } from "../../components/MainButton";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useData } from "../../store/store";
import "../../styles/Schedule/Schedule.css";
import { dateToString } from "../../utils/general";

export default function ScheduleRegister({ register, setRegister }) {
  const [init, setInit] = useState(
    // 수정하기로 들어오면 false, 추가하기로 들어오면 true
    register !== true ? false : true
  );
  const [test, setTest] = useState();
  const [typing, setTyping] = useState(
    // 작성값 임시로 넣는 상태값
    typeof register !== "boolean" // 데이터가 유무 register : 초기값
      ? register
      : {
          title: "",
          startAt: "",
          endAt: "",
          time: "",
          place: "",
          expect: 0,
          memo: "",
        }
  );
  const { date } = useParams();
  const store = useData();

  useEffect(() => {
    console.log(test);
  }, [test]);
  useEffect(() => {
    console.log(init);
    console.log(typing);
  }, [init]);

  function changeInput(event) {
    // if (event.target.name === "startAt" || event.target.name === "endAt") {
    //   const el = event.target.value.split("-");
    //   const value = new Date(el[0], el[1], el[2], 0).getTime();
    //   setTyping({
    //     ...typing,
    //     [event.target.name]: value,
    //   });
    // } else
    setTyping({
      ...typing,
      [event.target.name]: event.target.value,
    });
  }
  return (
    <>
      <div
        className="register"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          // justifyContent: "right",
          // alignItems: "right",
          // height: "100vh",
          // padding: "40px 20px",
          // marginTop: "5px",
        }}
      >
        <label style={{ marginLeft: "30px", width: "200px" }}>
          일정 추가/변경{" "}
        </label>
        <hr />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "80%",
            marginLeft: "30px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <label style={{ width: "80px" }}>제목</label>{" "}
            <input
              type="text"
              id="input"
              placeholder="제목"
              style={{ width: "70%", fontSize: "15px" }}
              name="title"
              value={typing.title}
              onChange={changeInput}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "80%",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <label style={{ width: "80px" }}>시작일 </label>

              <input
                type="date"
                id="currentDate"
                name="startAt"
                value={typing.startAt}
                onChange={changeInput}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "80%",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <label style={{ width: "80px" }}>종료일 </label>{" "}
              <input
                type="date"
                id="current_Date"
                name="endAt"
                value={typing.endAt}
                onChange={changeInput}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "80%",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <label style={{ width: "80px" }}>시간</label>{" "}
              <input
                type="time"
                id="currentTime"
                name="time"
                value={typing.time}
                onChange={changeInput}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "80%",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <label style={{ width: "80px" }}>장소</label>

              <input
                type="text"
                id="place"
                placeholder="장소"
                style={{ width: "70%", fontSize: "15px" }}
                name="place"
                value={typing.place}
                onChange={changeInput}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "80%",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <label style={{ width: "80px" }}>예상 지출 </label>

              <input
                type="number"
                id="spending"
                placeholder="예상 지출"
                style={{ width: "70%", fontSize: "15px" }}
                name="expected"
                value={typing.expected}
                onChange={changeInput}
              />
            </div>
          </div>
          <div>
            <label style={{ width: "80px" }}>메모 </label>

            <textarea
              type="text"
              id="memo"
              placeholder="메모"
              style={{
                width: "100%",
                height: "200px",
                fontSize: "15px",
              }}
              name="memo"
              value={typing.memo}
              onChange={changeInput}
            />
          </div>
        </div>

        <MainButton
          name="저장"
          onClick={() => {
            if (init) {
              //추가하기인 경우
              store.addSchedule(typing, date);
            } else {
              store.modifySchedule(typing);
            }
            setRegister(false); // 초기화면으로 복귀
          }}
        />
      </div>
    </>
  );
}
