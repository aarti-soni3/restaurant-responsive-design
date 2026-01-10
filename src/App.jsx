import "./App.css";
import AboutUs from "./Component/AboutUs";
import CustomerFeedback from "./Component/CustomerFeedback";
import Footer from "./Component/Footer";
import HeroSection from "./Component/HeroSection";
import NavigationBar from "./Component/NavigationBar";
import OrderNowBanner from "./Component/OrderNowBanner";
import ReserveTable from "./Component/ReserveTable";
import Services from "./Component/Services";
import TeamSection from "./Component/TeamSection";

function App() {
  return (
    <>
      <NavigationBar />
      <main className="w-full overflow-x-hidden">
        <div className="mt-10"></div>
        <HeroSection />
        <AboutUs />
        <Services />
        <CustomerFeedback /> 
        <OrderNowBanner/> 
        <TeamSection/>
        <ReserveTable/>
        <Footer/>
      </main>
    </>
  );
}
export default App;
