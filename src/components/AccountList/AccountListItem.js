import AccountModal from "../modal/AccountModal";
import { CiFaceSmile } from "react-icons/ci";
import { CiFaceFrown } from "react-icons/ci";
import { CiFaceMeh } from "react-icons/ci";
import { SlMagnifier } from "react-icons/sl";
import { useState } from "react";
import "../../styles/AccountList/AccountListItem.css";
import { comma } from "../../utils/general";

export default function AccountListItem({ inf, index, register, setRegister }) {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <li className="AccountListItem">
        <div className="type">{inf.type}</div>
        <div className="price">{comma(inf.price)} 원</div>
        <div className="usage">{inf.usage}</div>
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
        <div className="details" onClick={openModal}>
          {/* <SlMagnifier size={20} color="black" onClick={openModal} /> */}
          <img
            src="/img/more.png"
            alt="more"
            style={{ width: 25, height: 30 }}
          />
        </div>
      </li>

      <AccountModal
        open={modalOpen}
        close={closeModal}
        inf={inf}
        register={register}
        setRegister={setRegister}
        index={index}
      />
    </>
  );
}
