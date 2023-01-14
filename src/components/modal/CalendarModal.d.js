import React, { useState } from "react";
import "../../styles/CalendarModal.css";
import Diary from "../Diary/Diary";

const CalendarModal = (props) => {
  //const{ open, close, header } = props;
  const { modalOpen, setModalOpen } = props;

  //const navigate = useNavigate();

  /*const onClickbtn = () => {
        return <Navigate to="#" />;
    }

    const goToDiary = () => {
        return <Navigate to="./component/Diary" />;
    }*/

  return (
    <div className={modalOpen ? "openModal" : "closeModal"}>
      {modalOpen ? (
        <section className="modalAll">
          <header className="modalHeader">
            <h4>이동</h4>
            <button className="close" onClick={() => setModalOpen(false)}>
              X
            </button>
          </header>
          <div className="btnPackage">
            {/*<button onClick='location.href="#"'>다이어리</button>
                       <button onClick='location.href="#"'>가계부</button>
                       <button onClick='location.href="#"'>일정</button>*/}

            {/*<button onClick={() => {navigate('#')}}>다이어리</button>
                        <button onClick='location.href="#"'>가계부</button>
                    <button onClick='location.href="#"'>일정</button>*/}

            {/*<Router path="./component/Diary"><a><button>다이어리</button></a></Router>
                    <Router path="#"><a><button>가계부</button></a></Router>
                    <Router path="#"><a><button>일정</button></a></Router>*/}

            <button
              onClick={() => {
                <Diary />;
              }}
            >
              다이어리
            </button>
          </div>
        </section>
      ) : null}
    </div>

    /*<Modal {...props}>
        <Modal.Header closeButton>
            <Modal.Title>
                이동
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Button onClick="#">다이어리</Button>
            <Button onClick="#">가계부</Button>
            <Button onClick="#">일정</Button>
        </Modal.Body>
    </Modal>*/
  );
};
export default CalendarModal;

/*class CalendarModal extends Component {
    render() {
        const { open, close } = this.props;

        return(
        <div className={open ? 'openModal' : 'modal'}>
            {open ? (
                <section>
                    <button className='close' onClick={close}>X</button>
                        <h4>이동</h4>
                        <button onClick="#">다이어리</button>
                        <button onClick="#">가계부</button>
                        <button onClick="#">일정</button>
                </section>
            ) : null }
        </div>
        );
    }
}
export default CalendarModal;*/

/*function CalendarModal(props) {
    Modal.setAppElement("#root");

    return(
        <Modal 
            isOpen={props.taskModalVisible}
            onRequestClose={false}
        >
            <section>
                    <button className='close' onClick={() => props.setTaskModalVisible(false)}>X</button>
                    <h4>이동</h4>
                    <button onClick="#">다이어리</button>
                    <button onClick="#">가계부</button>
                    <button onClick="#">일정</button>
            </section>
        </Modal>
    );
}*/
