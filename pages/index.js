import { Main } from "../component/Main";
import { About } from "../component/About";
import { Aboutfix } from "../component/Aboutfix";
import { Skills } from "../component/Skills";
import { Newprojects } from "../component/Newprojects";
import { Footer } from "../component/Footer";
import { Header } from "../component/Header";
import { useEffect, useState } from "react";

export default function Home() {
  const [sendP, setSendP] = useState();
  let Scrolls;

  useEffect(() => {
    Scrolls = document.querySelectorAll("section");
    setSendP(Scrolls);
  }, []);

  return (
    <>
      <main>
        <Header sendP={sendP}></Header>
        <Main></Main>
        <Newprojects></Newprojects>
        <Aboutfix></Aboutfix>
        <Skills></Skills>
        <Footer></Footer>
      </main>
    </>
  );
}
