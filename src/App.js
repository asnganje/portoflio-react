import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return(
    <main className="flex flex-col min-h-screen">
      <Header />
      <section className="flex-1">
        <About />
        <Contact/>
      </section>
      <Footer className="mt-auto" />
    </main>
  )
}
export default App;