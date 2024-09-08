import NavBar from "./components/common/NavBar";
import MySection from "./components/MySection";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <NavBar />
        <div className="container mx-auto px-12 py-4">
          <MySection />
        </div>
    </main>
  );
}
