import { useData } from "../../store/store";
import "../../styles/modal/AccountModal.css";
import { comma } from "../../utils/general";

export default function ScheduleModal(props) {
  const { open, close, inf, register, setRegister, index } = props;

  const store = useData();

  return (
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>
            <div className="type">제목: {inf.title}</div>
            <div className="usage">
              {inf.time.split(":")[0]}시 {inf.time.split(":")[1]}분
            </div>
            <div className="price">장소: {inf.place}</div>
            <div className="pay">예상지출: {comma(inf.expected)} 원</div>
            <div className="memo">메모: {inf.memo}</div>
            <div className="emotion">
              {inf.emotion === "good" ? (
                // <CiFaceSmile size={28} color="black" />
                <img
                  src="/img/emotion/1.png"
                  alt="smile"
                  style={{ width: 28, height: 28 }}
                />
              ) : null}
              {inf.emotion === "soso" ? (
                // <CiFaceMeh size={28} color="black" />
                <img
                  src="/img/emotion/2.png"
                  alt="smile"
                  style={{ width: 28, height: 28 }}
                />
              ) : null}
              {inf.emotion === "bad" ? (
                // <CiFaceFrown size={28} color="black" />
                <img
                  src="/img/emotion/3.png"
                  alt="smile"
                  style={{ width: 28, height: 28 }}
                />
              ) : null}
            </div>
          </main>
          <footer>
            <button
              className="go_register"
              onClick={() => {
                setRegister(inf);
                close();
              }}
            >
              수정
            </button>
            <button
              className="remove"
              onClick={() => {
                store.deleteSchedule(index);
                close();
              }}
            >
              삭제
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
}
