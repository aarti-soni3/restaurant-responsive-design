import "./App.css";
import AboutUs from "./Component/AboutUS";
import HeroSection from "./Component/HeroSection";
import NavigationBar from "./Component/NavigationBar";
import Services from "./Component/Services";
import StatsSection from "./Component/StatsSection";

function App() {
  return (
    <>
      <NavigationBar />
      <main className="w-screen">
        <div className="mt-16"></div>
        <HeroSection />
        <AboutUs />
        <Services />
      </main>
    </>
  );
}
export default App;
