import { useState } from 'react';
import './index.css';

import Navbar               from './components/Navbar';
import DiscoveryHero        from './components/FeaturedEvent';
import QuickActions         from './components/QuickActions';
import FootballUniverse     from './components/FootballUniverse';
import TrendingNow          from './components/TrendingNow';
import CategorySection      from './components/CategorySection';
import LiveParties          from './components/LiveParties';
import DailyChallenge       from './components/DailyChallenge';
import FeaturedCollections  from './components/FeaturedCollections';
import TopPlayers           from './components/TopPlayers';
import Footer               from './components/Footer';

function App() {
  const [quizOpen,  setQuizOpen]  = useState(false);
  const [partyOpen, setPartyOpen] = useState(false);

  return (
    <>
      <Navbar
        onOpenQuiz={()  => setQuizOpen(true)}
        onOpenParty={() => setPartyOpen(true)}
      />

      {/* Offset content below fixed floating navbar */}
      <div style={{ paddingTop: '80px' }}>
        <main>
          {/* 1. Discovery Hero */}
          <DiscoveryHero
            onOpenQuiz={()  => setQuizOpen(true)}
            onOpenParty={() => setPartyOpen(true)}
          />

          {/* 2. Quick Actions */}
          <QuickActions
            onOpenQuiz={()  => setQuizOpen(true)}
            onOpenParty={() => setPartyOpen(true)}
          />

          {/* 3. Football Universe */}
          <FootballUniverse onOpenQuiz={() => setQuizOpen(true)} />

          {/* 4–8. Remaining discovery sections (unchanged) */}
          <TrendingNow />
          <CategorySection />
          <LiveParties onOpenParty={() => setPartyOpen(true)} />
          <DailyChallenge onOpenQuiz={() => setQuizOpen(true)} />
          <FeaturedCollections />
          <TopPlayers />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
