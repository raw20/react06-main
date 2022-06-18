import React, { useEffect, useRef, useState } from "react";
import "./../style/main.css";

const Main = () => {
  const listData = ["content01", "content02", "content03", "content04"];
  const [num, setNum] = useState(0);
  const checkRef = useRef("prev");

  listData.unshift(listData[listData.length - 1]);
  function fncClassAdd(index) {
    const on = index === num ? " on" : " on";
    const view = "view_";
    const textNum = "00000" + (index + 1);
    console.log(textNum.slice(-2));
    const viewText = view + textNum.slice(-2);
    return viewText + on;
  }

  const initialStyle = {
    position: "relative",
    left: "-100%",
    marginLeft: `${num * -100}%`,
    /*     transition: num !== 0 ? "margin 500ms ease" : "none",
    animaion: num === 0 ? " firstSlide 500ms ease 1 " : "none", */
  };
  const [slideStyle, setSlideStyle] = useState(initialStyle);
  function fncPrevStyle() {
    setSlideStyle({
      ...initialStyle,
      transition: num !== 3 ? "margin 500ms ease" : "none",
      animaion: num === 3 ? " lastSlide 500ms ease 1 " : "none",
    });
  }
  function fncNextStyle() {
    setSlideStyle({
      ...initialStyle,
      transition: num !== 0 ? "margin 500ms ease" : "none",
      animaion: num === 0 ? " firstSlide 500ms ease 1 " : "none",
    });
  }
  function fncPrevSlide() {
    setNum(num <= 0 ? 3 : num - 1);
    checkRef.current = "prev";
  }
  function fncNextSlide() {
    setNum(num >= 3 ? 0 : num + 1);
    checkRef.current = "next";
  }
  useEffect(() => {
    checkRef.current === "next" ? fncNextStyle() : fncPrevStyle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);
  return (
    <div className="mainContainer">
      <h2>메인페이지</h2>
      <div className="viewBox">
        <div className="slideBtn">
          <button
            type="button"
            onClick={() => {
              setNum(fncPrevSlide);
            }}
          >
            이전
          </button>
          <button
            type="button"
            onClick={() => {
              setNum(fncNextSlide);
            }}
          >
            이후
          </button>
        </div>
      </div>
      <div className="viewContents">
        <ul style={slideStyle}>
          {listData.map((list, index) => (
            <li className={fncClassAdd(index)}>{list}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Main;
