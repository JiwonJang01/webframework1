import ScheduleModal from "../modal/ScheduleModal";
import { useState } from "react";
import "../../styles/AccountList/AccountListItem.css";
import { comma } from "../../utils/general";

export default function ScheduleListItem({
  inf,
  index,
  register,
  setRegister,
}) {
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
        <div style={{ width: "100px" }}>{inf.title}</div>
        <div style={{ width: "100px" }}>
          {inf.time.split(":")[0]}시 {inf.time.split(":")[1]}분
        </div>
        <div className="usage">{inf.place}</div>
        <div style={{ width: "150px" }}>{comma(inf.expected)}원</div>

        <div className="details" onClick={openModal}>
          {/* <SlMagnifier size={20} color="black" onClick={openModal} /> */}
          <img
            src="/img/more.png"
            alt="more"
            style={{ width: 25, height: 30 }}
          />
        </div>
      </li>

      <ScheduleModal
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
