import { MainButton } from "../../components/MainButton";
import { useEffect, useState } from "react";
import { CiFaceFrown } from "react-icons/ci";
import { CiFaceMeh } from "react-icons/ci";
import { CiFaceSmile } from "react-icons/ci";
import { useParams } from "react-router-dom";
import { useData } from "../../store/store";
import "../../styles/AccountList/AccountRegister.css";

export default function AccountRegister({ register, setRegister }) {
  const [init, setInit] = useState(
    // 수정하기로 들어오면 false, 추가하기로 들어오면 true
    register !== true ? false : true
  );
  const [typing, setTyping] = useState(
    // 작성값 임시로 넣는 상태값
    typeof register !== "boolean" // 데이터가 유무 register : 초기값
      ? register
      : {
          type: 0,
          price: "",
          usage: "",
          date: "",
          memo: "",
          emotion: "",
          pay: "",
        }
  );
  const { date } = useParams();
  useEffect(() => {
    console.log(init);
  }, [init]);
  const store = useData();
  const getCurrentTimetoString = () => {
    return new Date().toLocaleString();
  };

  function changeInput(event) {
    setTyping({
      ...typing,
      [event.target.name]: event.target.value,
      date: getCurrentTimetoString(),
    });
  }
  return (
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
      <label style={{ marginLeft: "30px", width: "200px" }}>가계부 </label>
      <hr></hr>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "80%",
          marginLeft: "30px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <label>입출</label>
          <input
            type="radio"
            name="type"
            value="수입"
            onChange={changeInput}
            checked={typing.type === "수입"}
          />
          <span style={{ marginTop: "20px" }}>수입</span>
          <input
            style={{ marginLeft: "20px" }}
            type="radio"
            name="type"
            value="지출"
            onChange={changeInput}
            checked={typing.type === "지출"}
          />
          <span style={{ marginTop: "20px" }}>지출</span>
        </div>
        <div style={{ display: "flex" }}>
          <label f>제목</label>
          <input
            style={{ flex: 1, height: "20px" }}
            placeholder="사용목적"
            name="usage"
            value={typing.usage}
            onChange={changeInput}
          />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <label>금액</label>
          <input
            style={{ flex: 1, height: "20px" }}
            placeholder="금액"
            type="number"
            name="price"
            value={typing.price}
            onChange={changeInput}
          />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <label>수단</label>
          <select
            style={{ height: "25px", marginTop: "20px" }}
            name="pay"
            onChange={changeInput}
            defaultValue={typing.pay}
          >
            <option>카드</option>
            <option>현금</option>
            <option>계좌이체</option>
            <option>기프티콘</option>
          </select>
        </div>
        <div>
          <label>메모</label>
          <textarea
            style={{ width: "100%", height: "300px" }}
            placeholder="memo"
            name="memo"
            value={typing.memo}
            onChange={changeInput}
          />
        </div>
        <div className="emotion">
          <input
            style={{ marginLeft: "0" }}
            type="radio"
            name="emotion"
            value="good"
            onChange={changeInput}
            checked={typing.emotion === "good"}
          />
          {/* <CiFaceSmile size={35} color="black" /> */}
          <img
            src="/img/emotion/1.png"
            alt="smile"
            style={{ width: 35, height: 35 }}
          />
          <input
            style={{ marginLeft: "20px" }}
            type="radio"
            name="emotion"
            value="soso"
            onChange={changeInput}
            checked={typing.emotion === "soso"}
          />
          {/* <CiFaceMeh size={35} color="black" /> */}
          <img
            src="/img/emotion/2.png"
            alt="smile"
            style={{ width: 35, height: 35 }}
          />
          <input
            style={{ marginLeft: "20px" }}
            type="radio"
            name="emotion"
            value="bad"
            onChange={changeInput}
            checked={typing.emotion === "bad"}
          />
          {/* <CiFaceFrown size={35} color="black" /> */}
          <img
            src="/img/emotion/3.png"
            alt="smile"
            style={{ width: 35, height: 35 }}
          />
        </div>
        {/* <button
          style={{
            marginLeft: "auto",
            marginRight: "50px",
            marginTop: "30px",
          }}
          onClick={() => {
            if (init) {
              //추가하기인 경우
              store.addAcc(typing, date);
            } else {
              store.modifyAcc(typing);
            }
            setRegister(false); // 초기화면으로 복귀
          }}
        >
          저장
        </button> */}
        <MainButton
          name="저장"
          onClick={() => {
            if (init) {
              //추가하기인 경우
              store.addAcc(typing, date);
            } else {
              store.modifyAcc(typing);
            }
            setRegister(false); // 초기화면으로 복귀
          }}
        />
      </div>
    </div>
  );
}
