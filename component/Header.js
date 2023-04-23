import React, { useEffect, useRef, useState } from "react";
import Headcss from "@/styles/Headcss.module.scss";

export const Header = ({ sendP }) => {
  const [menubar, setMenubar] = useState(false); //헤더 반응형  state
  const mobHeader = useRef();
  const menuevent = useRef();

  useEffect(() => {
    function tabletSize() {
      if (window.innerWidth > 1024) {
        setMenubar(false);
      } else {
        setMenubar(true);
      }

      window.addEventListener("resize", tabletSize);

      return () => {
        window.removeEventListener("resize", tabletSize);
      };
    }
    tabletSize();
 
  }, []); //헤더 반응형
  function view(i) {

    sendP && sendP[i].scrollIntoView({ behavior: "smooth" });
  

  }

  function handleClick() {
    let child = mobHeader && mobHeader.current.children;
    
    let i = 0;
    for (i = 0; i < 3; i++) {
      if (i === 0) {
        child[i].classList.toggle("linedown");
      } else if (i === 1) {
        child[i].classList.toggle("fadeout");
      } else if( i === 2){
        child[i].classList.toggle("lineup");
      } 
      
    }
    mobHeader.current.classList.toggle("animate");
    menuevent.current.classList.toggle("active");
  } //헤더 버튼 애니메이션

  return (
    <>
      <header className={Headcss.header}>
        <div className={Headcss.parallelogramBox}>
          <div className={Headcss.parallelogram}></div>
          <p className={Headcss.myname}>Kyung Woo Kim</p>
        </div>
        {menubar ? (
          <div className={Headcss.right}>
            <div className={Headcss.menubar} onClick={() => handleClick()}>
              <div className={Headcss.spans} ref={mobHeader}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <ul className={Headcss.menudown} ref={menuevent}>
              <li
                onClick={() => {
                  view(0);
                }}
              >
                Home
              </li>
              <li
                onClick={() => {
                  view(1);
                }}
              >
                Projects
              </li>
              <li
                onClick={() => {
                  view(2);
                }}
              >
                About
              </li>
              <li
                onClick={() => {
                  view(3);
                }}
              >
                Skill
              </li>
            </ul>
          </div>
        ) : (
          <nav className={Headcss.right}>
            <a
              onClick={() => {
                view(0);
              }}
            >
              Home
            </a>
            <a
              onClick={() => {
                view(1);
              }}
            >
              Projects
            </a>
            <a
              onClick={() => {
                view(2);
              }}
            >
              About
            </a>
            <a
              onClick={() => {
                view(3);
              }}
            >
              Skills
            </a>
          </nav>
        )}
      </header>
    </>
  );
};
