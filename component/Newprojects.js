import React, { useEffect, useRef, useState } from "react";
import Newprojectscss from "@/styles/Newprojectscss.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper";

export const Newprojects = () => {
  
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [imgstate, setImgstate] = useState(); //내가 만든 프로젝트 정보 담은 state
  const [swiperIndex, setSwiperIndex] = useState(0); //초기값 0 으로 설정 , swiper index 담는 state
  const animation = useRef();

  const handleExternalLink = (url) => {
    // window.location.href = url;
    window.open(url);
  }; //내 사이트로 보내주는 함수

  function getIndex(index) {
    setSwiperIndex(index);
    handleClick();
  } //swiper index값을 state에 담는 함수 , 애니메이션 실행

  function handleClick() {
    animation.current.classList.add("animate");
    setTimeout(() => {
      animation.current.classList.remove("animate");
    }, 500);
  }

  useEffect(() => {
    let datas = [
      {
        name: "JEJUBEER",
        url: "/jejubeer.png",
        id: 0,
        detail:
          "클론코딩을 한 첫 프로젝트입니다. 마크업을 연습하기 위해 만든 사이트이며 실력 향상에 도움이 많이 된 사이트입니다.",
        skills:
          "HTML5, CSS3, SCSS, JQuery 를 사용 GitHub를 이용하여 사이트 배포",
        site: "https://suparuu.github.io/Project_jejubeer/",
        alt: "첫 프로젝트",
      },
      {
        name: "League Of LegendsAPI",
        url: "/project_lol1.png",
        id: 2,
        detail:
          "React와 League Of Legends API를 활용하여 만든 프로젝트입니다. 롤 챔피언 정보를 알려주는 사이트이며 검색기능, 카테고리별 정리, API데이터 추출 및 활용하였습니다.",
        skills:
          "Javascript, CSS, SCSS, React, JQuery, League of Legends API 사용 GitHub를 이용하여 사이트 배포",
        site: "https://suparuu.github.io/Project_lol/",
        alt: "LOL Api를 활용한 프로젝트",
      },
      {
        name: "SpotifyAPI",
        url: "/project-spotify.png",
        id: 3,
        detail:
          "Next.js, SpotifyAPI, mySql 활용하여 만든 프로젝트입니다. 모바일 앱 버전으로 만들었고, CRUD를 활용하여 로그인기능을 구현하였습니다.",
        skills:
          "Next.js, mySQL, Spotify API 사용 CloudType을 이용하여 사이트 배포",
        site: "https://port-0-spotifyapi-p8xrq2mlf26usw6.sel3.cloudtype.app/",
        alt: "Spotify Api를 활용한 프로젝트",
      },
      {
        name: "ProjectCiga",
        url: "/ciga.png",
        id: 1,
        detail:
          "json과 javascript를 활용하여 만든 프로젝트입니다. 담배를 추천해주는 사이트이며 JSON을 활용하여 데이터 정리 및 추출하였고 선택지 게임을 구현하였습니다.",
        skills:
          "HTML, CSS, SCSS, Javascript, JSON , JQuery, Swiper.js를 사용 GitHub를 이용하여 사이트 배포",
        site: "https://suparuu.github.io/Project_Ciga/",
        alt: "첫 팀 프로젝트",
      },
      {
        name: "Portfolio",
        url: "/project-portfolio.png",
        id: 4,
        detail:
          "현재 보고 계시는 제 포트폴리오 사이트입니다. 그동안 배운 내용들을 정리하는 시간을 가지며 부족했던 부분을 보완하여 만들었습니다.",
        skills:
          "Next.js, SCSS, Swiper.js를 사용 Vercel을 이용하여 사이트 배포",
        site: "https://suparuu-portfolio.vercel.app/",
        alt: "포트폴리오 프로젝트",
      },
    ];
    setImgstate(datas);
  }, []); //프로젝트 이미지, 내용, 이름 수정하기 및 기능 덜 했음

  return (
    <section className={Newprojectscss.sectionBox}>
      <div className={Newprojectscss.leftBox}>
        <div className={Newprojectscss.textBox} ref={animation}>
          {imgstate &&
            imgstate.map((obj, index) => {
              if (index == swiperIndex) {
                return (
                  <>
                    <p className={Newprojectscss.pjName} >{obj.name}</p>
                    <p className={Newprojectscss.pjDetail}>{obj.detail}</p>
                    <p className={Newprojectscss.pjSkill}>{obj.skills}</p>
                    <div
                      key={index}
                      className={Newprojectscss.gotoProject}
                      onClick={() => {
                        handleExternalLink(obj.site);
                      }}
                    >
                      프로젝트 보러가기
                    </div>
                  </>
                );
              }
            })}
        </div>
      </div>
      <div className={Newprojectscss.rightBox}>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
            width: "100%",
          }}
          spaceBetween={0}
          navigation={true}
          onSlideChange={(e) => getIndex(e.realIndex)}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {imgstate &&
            imgstate.map((img, id) => {
              return (
                <SwiperSlide style={{ width: "100%" }} key={id}>
                  <img
                    className={Newprojectscss.bigImg}
                    src={img.url}
                    alt={img.alt}
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
        <Swiper
          style={{
            position: "absolute",
            bottom: "0",
            padding: "5%",
            width: "100%",
          }}
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={3}
          freeMode={false}
          watchSlidesProgress={false}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {imgstate &&
            imgstate.map((img, id) => {
              return (
                <SwiperSlide key={id}>
                  <img
                    className={Newprojectscss.smallImg}
                    src={img.url}
                    alt={img.alt}
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </section>
  );
};
