import React, { useEffect, useState, useRef } from "react";
import { useData } from "../../store/store";
import "../../styles/MyCalendar/Result.css";
import { comma } from "../../utils/general";
import "../../styles/Menu.css";
import Diary from "../Diary/Diary";


function Result() {
  // menu
  const [menuOpen, setMenuOpen] = useState(false);
  const [btnOpen, setBtnOpen] = useState(false);

  const outSection = useRef();

  const handleClickOutside = (e) => {
    if (menuOpen && !outSection.current.contains(e.target)) setMenuOpen(false);
    if (btnOpen && !outSection.current.contains(e.target)) setBtnOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen((menuOpen) => !menuOpen);
    setBtnOpen((btnOpen) => !btnOpen);
  };

  useEffect(() => {
    if (menuOpen && btnOpen) window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen, btnOpen]);



  // result
  const [modifyOpen, setModifyOpen] = useState(false);
  const [isBudget, setBudget] = useState(
        () => JSON.parse(window.localStorage.getItem("isBudget")) || 0
        );

  const [result, setResult] = useState({ income: 0, expense: 0 });
  const store = useData();

  const modifyBtnClick = () => {
    setModifyOpen(modifyOpen => !modifyOpen);
};

const modifyModalRef = useRef();
const modifyClickOutside = ({ target }) => {
  if (modifyOpen && (!modifyModalRef.current || !modifyModalRef.current.contains(target)))
    setModifyOpen(false);
};
useEffect(() => {
  if(modifyOpen)
    window.addEventListener("mousedown", modifyClickOutside);
  return () => {
    window.removeEventListener("mousedown", modifyClickOutside);
  };
}, [modifyOpen]);


  useEffect(() => {
    const data = store.data;
    let income = 0;
    let expense = 0;

    data.forEach((d, i) => {
      if (d.date <= store.endMonth && d.date >= store.startMonth) {
        d.data.account.forEach((x, y) => {
          if (x.type === "수입") income += Number(x.price);
          else if (x.type === "지출") expense += Number(x.price);
        });
      }
    });
    setResult({ income: income, expense: expense });
  }, [store]);

  const uncommaBudget = (str) => {
    const uncomma = (str) => {
      str = String(str);
      return str.replace(/[^\d]+/g, "");
    };
    return uncomma(str);
  }

  function setcolor() {
    if(uncommaBudget(isBudget) < result.expense) { // 예산이 작을 때
      return (
      <>
        지출 <span className="warning">{comma(result.expense)}</span>
        <p className="informationMessage">예산을 초과하였습니다.</p>
      </>
      );
    }
    else if(uncommaBudget(isBudget) > result.expense) { // 예산이 클 때
      if(uncommaBudget(isBudget)/2 == result.expense) { // 예산의 절반만큼 썼을 때
        return (
          <>
            지출 <span className="half">{comma(result.expense)}</span>원
            <p className="informationMessage">예산의 절반만큼을 사용하였습니다.</p>
          </>
        );
      } 
      else if((uncommaBudget(isBudget)/2 < result.expense)) { // 예산의 절반보다 더 썼을 때
        return (
          <>
            지출 <span className="beware">{comma(result.expense)}</span>원
            <p className="informationMessage">예산의 절반보다 더 사용하였습니다.</p>
          </>
        );
      }
      else {
        return (
          <>
            지출 <span className="expenditure">{comma(result.expense)}</span>원
          </>
        );
      }
    }
    else { // 같을 때
      return (
        <>
          지출 <span className="same">{comma(result.expense)}</span>원
          <p className="informationMessage">설정한 예산과 지출액이 같습니다.</p>
        </>
      );
    }
  }


  return (
    <aside>
      <div className="results">
        <p className="amount">
          수입 <span className="income">{comma(result.income)}</span>원
        </p>
        <p className="amount">
          예산 <span className="budget">{comma(isBudget)}</span>원
        </p>
        <p className="amount">
          {setcolor()}
        </p>
      </div>


      <div className="header" ref={outSection}>
      <menu>
        {" "}
        {/*menuOpen이 true면 active false면 blank*/}
        <div className={menuOpen ? "showMenu" : "hideMenu"}>
        <section className="modifyAll">
            <header className='modifyHeader'>
              <h4>예산 추가 및 수정</h4>
            </header>
            <main>
              <form className="editPackage">
                <input type="text" name="budgetTxt" onChange={(e) => {setBudget((e.target.value.replace(/[^0-9]/g, "")))}} value={isBudget}></input>
              </form>
            </main>
          </section>
        </div>

        <button
              className={btnOpen ? "menuBtn" : "closeBtn"}
              id="hideMenu"
              onClick={() => {
                toggleMenu();
              }}
            >
              {btnOpen ? "<" : ">"}
            </button>
      </menu>
    </div>
    </aside>
  );
}

export default Result;