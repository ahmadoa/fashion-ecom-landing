import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Collections from "./components/Collections";
import { Promotion, Sponsors } from "./components/PromotionSponsors";
import Services from "./components/Services";
import Ceo from "./components/Ceo";

function App() {
  return (
    <div className="w-full">
      <Header />
      <Hero />
      <Collections />
      <Services />
      <Sponsors />
      <Ceo />
      <Promotion />
      <Footer />
    </div>
  );
}

export default App;
