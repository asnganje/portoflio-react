import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return(
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">

      </div>
      <Contact/>
      <Footer className="mt-auto" />
    </div>
  )
}
export default App;