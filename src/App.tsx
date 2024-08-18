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
        <div className="flex justify-center flex-wrap gap-5">
          <TextRevealComponent />
        </div>
      </section>
      <section id="projects">
        <TracingBeamComponent />
      </section>
      <section id="skills">
        <IconCloudComponent />
        <MarqueeComponent />
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


