import MyCalendar from "./components/MyCalendar/MyCalendar";
import Menu from "./components/Menu";
import Result from "./components/MyCalendar/Result";
import { useEffect, useState } from "react";
import AccountList from "./components/AccountList/AccountList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Diary from "./components/Diary/Diary";
import { col, useData } from "./store/store";
import { Background } from "./components/MyCalendar/Background";
import ScheduleList from "./components/Schedule/ScheduleList";

function App() {
  const [selectedDate, setSelectedDate] = useState(0);
  const hook = useData();

  return (
    <BrowserRouter>
      <div
        id="wrap"
        style={{
          transition: "all .3s ease",
          background: col[hook.currentColorIndex],
        }}
      >
        <Background />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="calendarContainer">
                  <MyCalendar
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                  />
                  <Result />
                </div>
              </>
            }
          />

          <Route path="/account/:date" element={<AccountList />} />
          <Route path="/diary/:date" element={<Diary />} />
          <Route path="/schedule/:date" element={<ScheduleList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
