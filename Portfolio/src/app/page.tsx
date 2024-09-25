import Footer from "./components/common/Footer";
import NavBar from "./components/common/NavBar";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import MySection from "./components/pages/MySection";
import Projects from "./components/pages/Projects";
import { TracingBeam } from "./components/ui/TracingBeam";  // Import your TracingBeam here

export default function Home() {
  return (
    <TracingBeam>
      <main className="flex min-h-screen flex-col bg-black">
        <NavBar />
        <div className="container mt-24 mx-auto px-12 py-4">
          <MySection />
          <About />
          <Projects />
          <Contact />
        </div>
        <Footer />  
      </main>
    </TracingBeam>
  );
}
