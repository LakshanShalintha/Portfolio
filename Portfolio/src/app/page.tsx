import NavBar from "./components/common/NavBar";
import About from "./components/pages/About";
import MySection from "./components/pages/MySection";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <NavBar />
        <div className="container mt-24 mx-auto px-12 py-4">
          <MySection />
          <About />
        </div>
    </main>
  );
}
