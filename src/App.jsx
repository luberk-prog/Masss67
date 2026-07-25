import './index.css';
import Navbar from './components/Navbar';
import FeaturedEvent from './components/FeaturedEvent';
import TrendingNow from './components/TrendingNow';
import CategorySection from './components/CategorySection';
import LiveParties from './components/LiveParties';
import DailyChallenge from './components/DailyChallenge';
import FeaturedCollections from './components/FeaturedCollections';
import TopPlayers from './components/TopPlayers';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <FeaturedEvent />
        <TrendingNow />
        <CategorySection />
        <LiveParties />
        <DailyChallenge />
        <FeaturedCollections />
        <TopPlayers />
      </main>
      <Footer />
    </>
  );
}

export default App;
