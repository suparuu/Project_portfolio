import React, { useRef } from "react";
import Maincss from "@/styles/Maincss.module.scss";
import { Header } from "./Header";

export const Main = () => {
  const goToMain = useRef();

  
  return (
    <>
      <section className={Maincss.mainFlex} ref={goToMain}>
        <div className={Maincss.shapeAndText}>
          <div className={Maincss.shapeBox}>
            <div className={Maincss.shape}></div>
            <h1 className={Maincss.h1Text}>Frontend</h1>
          </div>
        </div>
        <div className={Maincss.whoamI}>
          <p className={Maincss.aspiration}>
            제가 배운 기술로 웹페이지를 구현해가는 과정이 재밌습니다. 항상 새로운 시도를 두려워하지 않고 끊임없이 발전해 나가는 프론트엔드 개발자가 되겠습니다.
          </p>
          <br></br>
          <p className={Maincss.myName}>김경우 </p>
        </div>
      </section>
    </>
  );
};
