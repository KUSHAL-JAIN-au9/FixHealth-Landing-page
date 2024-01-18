import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Doctors from "./components/Doctors";
import Download from "./components/Download";
import Homebanner from "./components/Homebanner";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import BookingForm from "./layouts/BookingForm";
import FAQ from "./layouts/FAQ";
import FooterBar from "./layouts/Footer";
import Footer from "./layouts/Footer";
import Testimonials from "./layouts/Testimonials";

function App() {
  return (
    <div className=" w-full  ">
      <Navbar />
      <Homebanner />
      <BookingForm />
      <About />
      <Services />
      <Doctors />
      <FAQ />
      <Testimonials />
      <Download />
      <Contact />
      <FooterBar />
      {/* <h1 className="bg-red-950 text-xl">Vite + React</h1> */}
    </div>
  );
}

export default App;
