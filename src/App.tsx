import Footer from "./components/AppFooter";
import Contact from "./components/Contact";
import { IconCloudComponent } from "./components/InteractiveIcons";
import { MarqueeComponent } from "./components/Marquee";
import { TextRevealComponent } from "./components/TextReveal";
import { TracingBeamComponent } from "./components/TracingBeam";
import Hero from "./components/hero";



export default function App() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <TextRevealComponent />
      </section>
      <section id="projects">
        <TracingBeamComponent />
      </section>
      <section id="skills">
        <MarqueeComponent />
      </section>
      <section id="tools">
        <IconCloudComponent />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </>
  );
}


