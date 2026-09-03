import './App.css'
import FirstFold from './FirstFold'
import Projects from './Projects'
import PatternBg from './PatternBg'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import Footer from './Footer'

gsap.registerPlugin(SplitText, useGSAP);

function App() {


  useGSAP(() => {
    const heroSplit = new SplitText(".title", { type: "chars" });
    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

    tl.from(".pattern_bg, .name_logo_container p", {
      yPercent: -100,
      duration: 2,
      ease: "power4.inOut",
      delay: 1,
      opacity: 0.6,
    })

      .from(".first_line h1", {
        yPercent: 100,
        duration: 1.5,
        opacity: 0,
      })
      .from(heroSplit.chars, {
        yPercent: 100,
        duration: 1,
        stagger: 0.02,
        opacity: 0,
      }, "-=0.5")
      .from(".subtitle_container div", {
        opacity: 0,
        yPercent: 100,
        duration: 1,
        stagger: 0.2,
      }, "-=1")
      .from(".projects_container", {
        yPercent: 50,
        duration: 1.5,
      }, "-=1");

  }, [])

  return (
    <>
      <div className='container'>
        <PatternBg />
        <FirstFold />
        <Projects />
        <Footer />
      </div >
    </>
  )
}

export default App
