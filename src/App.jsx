import "./App.css";
import About from "./components/About";
import Homebanner from "./components/Homebanner";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

function App() {
  return (
    <div className=" w-full  ">
      <Navbar />
      <Homebanner />
      <About />
      <Services />
      {/* <h1 className="bg-red-950 text-xl">Vite + React</h1> */}
    </div>
  );
}

export default App;
