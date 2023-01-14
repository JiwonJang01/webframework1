import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/modal/CalendarModal.css";

export default function CalendarModal(props) {
  const { modalOpen, setModalOpen, setRender } = props;
  const navigate = useNavigate();

  const modalEl = useRef();
  const handleClickOutside = ({ target }) => {
    if (modalOpen && (!modalEl.current || !modalEl.current.contains(target)))
      setModalOpen(false);
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [modalOpen]);

  return (
    <div
      className={
        modalOpen ? "openCalendarModal calendarModal" : "calendarModal"
      }
    >
      {modalOpen ? (
        <section ref={modalEl}>
          <header>
            <button
              className="close"
              onClick={() => {
                setModalOpen(false);
              }}
            >
              &times;
            </button>
          </header>
          <main>
            <div
              onClick={() => {
                navigate(`/diary/${props.selectedDate}`);
              }}
            >
              다이어리
            </div>
            <div
              onClick={() => {
                navigate(`/account/${props.selectedDate}`);
              }}
            >
              가계부
            </div>
            <div
              onClick={() => {
                navigate(`/schedule/${props.selectedDate}`);
              }}
            >
              일정
            </div>
          </main>
        </section>
      ) : null}
    </div>
  );
}
