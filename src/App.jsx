import "./App.css";
import AboutUs from "./Component/AboutUs";
import CustomerFeedback from "./Component/CustomerFeedback";
import HeroSection from "./Component/HeroSection";
import NavigationBar from "./Component/NavigationBar";
import Services from "./Component/Services";

function App() {
  return (
    <>
      <NavigationBar />
      <main className="w-full overflow-x-hidden">
        <div className="mt-16"></div>
        <HeroSection />
        <AboutUs />
        <Services />
        <CustomerFeedback />  
      </main>
    </>
  );
}
export default App;
