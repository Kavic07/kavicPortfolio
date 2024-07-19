import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Pages/About/About";
import Header from "./Pages/Header/Header";

function App() {
  return (
    <>
      <div className="app-container">
        <Navbar />
        <div className="content-container">
          <Header />
          <About />
        </div>
      </div>
    </>
  );
}

export default App;
