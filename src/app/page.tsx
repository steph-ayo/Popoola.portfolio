import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import GetInTouch from "./components/GetInTouch";
// import Beyond from "./components/Beyond";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      {/* <Beyond /> */}
      <GetInTouch />
      <Footer />
    </>
  );
}
