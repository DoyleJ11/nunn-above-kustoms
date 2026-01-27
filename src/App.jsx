import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedWork from "./components/FeaturedWork";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import InstagramStrip from "./components/InstagramStrip";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-white">
      <Navbar />
      <main>
        <Hero />
        <FeaturedWork />
        <Services />
        <About />
        <Contact />
        <InstagramStrip />
      </main>
      <Footer />
    </div>
  );
}
