import { useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Experience from "./components/Experience";

const App = () => {
  useEffect(()=> {
    window.scrollTo(0, 0);
  })

  return(
    <main className="flex flex-col min-h-screen">
      <Header />
      <section className="flex-1">
        <Intro/>
        <Experience id="section1"/>
        <About id="section2"/>
        <Contact id="section3"/>
      </section>
      <Footer className="mt-auto" />
    </main>
  )
}
export default App;