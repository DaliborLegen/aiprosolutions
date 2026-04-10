import Navbar from "./components/Navbar";
import NetworkBG from "./components/NetworkBG";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import WhyUs from "./sections/WhyUs";
import Process from "./sections/Process";
import Projects from "./sections/Projects";
import Testimonials from "./sections/Testimonials";
import CTA from "./sections/CTA";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <>
      <NetworkBG />
      <div className="relative grid-bg">
        <Navbar />
        <Hero />
        <Services />
        <WhyUs />
        <Process />
        <Projects />
        <Testimonials />
        <CTA />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
