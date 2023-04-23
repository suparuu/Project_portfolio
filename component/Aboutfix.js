import React, { useEffect, useState } from "react";
import Aboutfixcss from "@/styles/Aboutfixcss.module.scss";

export const Aboutfix = () => {
  const [aboutImg, setAboutImg] = useState();
  const [mobSize , setMobSize] = useState(false);//반응형일시 바꾸기

  useEffect(() => {
    const datas = [
      { name: "이름", url: "/user.png", detail: "김경우" },
      { name: "생년월일", url: "/calender.png", detail: "1997.02.12" },
      { name: "주소", url: "/address.png", detail: "서울시 광진구" },
      { name: "연락처", url: "/phone.png", detail: "010-8366-0239" },
      { name: "이메일", url: "/envelope.png", detail: "kkwoo97@naver.com" },
      { name: "깃허브", url: "/github-blue.png", detail: "https://github.com/suparuu" },
    ];

    setAboutImg(datas);
  }, []);

  useEffect(() => {
    function mobileResize() {
      if (window.innerWidth > 768) {
        setMobSize(false);
      } else {
        setMobSize(true);
      }

      window.addEventListener("resize", mobileResize);

      return () => {
        window.removeEventListener("resize", mobileResize);
      };
    }
    mobileResize();
 
  }, []); //반응형 



  return (
    <>
      <section className={Aboutfixcss.sectionBox}>
        <div className={Aboutfixcss.textBox}>
          <h2 className={Aboutfixcss.text}>About Me</h2>
        </div>
        <div className={Aboutfixcss.aboutBox}>
          <div className={Aboutfixcss.leftBox}>
            <img
              className={Aboutfixcss.myImg}
              src="/AboutmeImg.jpg"
              alt="제 사진입니다."
            />
          </div>

          <div className={Aboutfixcss.rightBox}>
            {mobSize? (
            <p className={Aboutfixcss.myName}>김경우</p>
            ) : (
                <p className={Aboutfixcss.myName}>김경우 (Kyung Woo Kim)</p>
            )}
            <p className={Aboutfixcss.relate}>
              서울거주 / 27세 / 남자 / 게임좋음 / ESTP / kkwoo97@naver.com
            </p>

            <div className={Aboutfixcss.flexImg}>
            {aboutImg &&
              aboutImg.map((obj, i) => {
                return (
                  <div className={Aboutfixcss.imgBoxs} key={i}>
                    <div className={Aboutfixcss.imgBox}>
                      <img
                        src={obj.url}
                        alt={obj.name}
                      ></img>
                    </div>
                    <div className={Aboutfixcss.detailBox}>
                      <p>{obj.name}</p>
                      <p>{obj.detail}</p>
                    </div>
                  </div>
                );
              })}
              </div>
          </div>
        </div>
      </section>
    </>
  );
};
