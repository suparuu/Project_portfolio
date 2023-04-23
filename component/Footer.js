import React from "react";
import Footercss from "@/styles/Footercss.module.scss";

export const Footer = () => {
  return (
    <div className={Footercss.section}>
      <div className={Footercss.left}>
        <p>Copyright 2023. Suparuu All rights reserved</p>
      </div>
      <div className={Footercss.right}>
        <p>Phone : 010-8366-0239</p>
        <p>Email : kkwoo97@naver.com</p>
      </div>
    </div>
  );
};
