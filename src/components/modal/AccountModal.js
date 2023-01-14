import { CiFaceSmile } from "react-icons/ci";
import { CiFaceFrown } from "react-icons/ci";
import { CiFaceMeh } from "react-icons/ci";
import { useData } from "../../store/store";
import "../../styles/modal/AccountModal.css";
import { comma } from "../../utils/general";

export default function AccountModal(props) {
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
            <div className="type">입출: {inf.type}</div>
            <div className="usage">제목: {inf.usage}</div>
            <div className="price">금액: {comma(inf.price)} 원</div>
            <div className="pay">수단: {inf.pay}</div>
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
                store.deleteAcc(index);
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
