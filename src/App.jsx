import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Header from "./Pages/Header/Header";
import Project from "./Pages/Project/Project";
import Services from "./Pages/Services/Services";

function App() {
  return (
    <>
      <Navbar />

      <Header />
      <About />
      <Project />
      <Services />
      <Contact />
    </>
  );
}

export default App;
