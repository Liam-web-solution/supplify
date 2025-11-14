import Header from "./Header";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks"
import Footer from "./Footer";
import SuppliersSay from "./SupliersSay";


function Homee  (){
  return (
    <div className="font-[Inter] scroll-smooth bg-gray-50 dark:bg-gray-900">
      <Header />
      <Hero />
      <HowItWorks />
      <SuppliersSay/>
      <Footer />
    </div>
  );
};

export default Homee;