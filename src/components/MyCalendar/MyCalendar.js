import React, { useState, useEffect, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import "../../styles/MyCalendar/MyCalendar.css";
import "@fullcalendar/core/main.js";
import "@fullcalendar/core/locales-all.js";
//import { Calendar } from '@fullcalendar/core';
import CalendarModal from "../../components/modal/CalendarModal";
import { useData } from "../../store/store";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
// import "popper.js/dist/umd/popper.min.js";

function MyCalendar({ setRender, selectedDate, setSelectedDate }) {
  const [modalOpen, setModalOpen] = useState(false);
  const store = useData();

  const handleDateClick = (e) => {
    setSelectedDate(e.date.getTime());
    setModalOpen((modalOpen) => !modalOpen);
  };

  return (
    <section>
      <div className="App" style={{ position: "relative" }}>
        <FullCalendar
          plugins={[interactionPlugin, dayGridPlugin]}
          dateClick={handleDateClick}
          defaultView="dayGridMonth"
          headerToolbar={{
            left: "prev",
            center: "title",
            right: "next",
          }}
          selectable="true"
          editable="true"
          locale="ko"
          datesSet={(e) => {
            store.setColorIndex(e.view.currentStart.getMonth());
            store.setMonth(
              e.view.currentStart.getTime(),
              e.view.currentEnd.getTime()
            );
          }}
          //events={this.monthChange}
          //day = date.toLocaleString(locale, { day: "numeric" })
        />
      </div>
      {modalOpen && (
        <CalendarModal
          selectedDate={selectedDate}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          setRender={setRender}
        />
      )}
    </section>
  );
}
export default MyCalendar;
