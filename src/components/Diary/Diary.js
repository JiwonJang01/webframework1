import React, { useRef, useState, useEffect } from "react";
import "../../styles/Diary/Diary.css";
import { useParams } from "react-router-dom";
import { useData } from "../../store/store";
import { useNavigate } from "react-router-dom";
import { MainButton } from "../../components/MainButton";

const Diary = () => {
  // const { title, write } = text;
  // const titlearea = useRef(null); //제목 입력 칸
  // const writearea = useRef(null); //일기 입력 칸
  const { date } = useParams();
  const store = useData();
  const navigate = useNavigate();
  const [renderData, setRenderData] = useState([]);
  //const dataID = useRef(0);

  useEffect(() => {
    const data = store.data; // array
    data.forEach((d, i) => {
      if (Number(date) === d.date) {
        setRenderData(d.data.diary);
        store.setCurrentDataIndex(i);
      } else store.setCurrentDataIndex(null);
    });
  }, [store.data, date]);

  const creatDiary = () => {
    store.registDiary(renderData, date);
    navigate("/");
  };
  return (
    <div>
      <div className="DiaryM">
        <h2>다이어리</h2>
        <br />
      </div>

      <hr />

      <div className="Title">
        <label>제목</label>
        <div>
          <textarea
            className="TitleBox"
            cols="93"
            rows="1"
            value={renderData.title}
            onChange={(e) => {
              setRenderData({
                ...renderData,
                title: e.target.value,
              });
            }}
          ></textarea>
        </div>
      </div>
      <br />

      <div className="DiaryText">
        <textarea
          cols="100"
          rows="20"
          value={renderData.desc}
          onChange={(e) => {
            setRenderData({
              ...renderData,
              desc: e.target.value,
            });
          }}
        />
      </div>

      <br />
      {/* <div className="Button"> */}
      {/* <button onClick={creatDiary}>저장</button> */}
      <MainButton name="저장" onClick={creatDiary} />
      {/* </div> */}
    </div>
  );
};

export default Diary;

/*

<input 
            value={title}
            placeholder={title}
            onChange={e=>setTitle(e.target.value)}/>

<input 
            value={text}
            placeholder={text}
            onChange={e=>setText(e.target.value)}/>
            
<button onClick={creatDiary}>save</button>

<div style="position: absolute; right: 0px; bottom: 0px;">
                <button onClick={creatDiary}>save</button>
            </div>

            <textarea  cols="95" rows="1" ref={titlearea} value={title} onChange={(e)=>{setTitle(e.target.value)}} />
*/
