import { useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Intro from "./components/Intro";

const App = () => {
  useEffect(()=> {
    window.scrollTo(0, 0);
  })

  return(
    <main className="flex flex-col min-h-screen">
      <Header />
      <section className="flex-1">
        <Intro/>
        <About />
        <Contact/>
      </section>
      <Footer className="mt-auto" />
    </main>
  )
}
export default App;