import { ThemeProvider } from "./context/ThemeContext";
import { useLenis } from "./hooks/useLenis";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Vision from "./components/Vision";
import Units from "./components/Units";
import Gallery from "./components/Gallery";
import Location from "./components/Location";
import Amenities from "./components/Amenities";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function Page() {
  useLenis();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Vision />
        <Units />
        <Gallery />
        <Location />
        <Amenities />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Page />
    </ThemeProvider>
  );
}
