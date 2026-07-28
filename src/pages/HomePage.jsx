import DiscoveryHero from '../components/FeaturedEvent';
import QuickActions from '../components/QuickActions';
import FootballUniverse from '../components/FootballUniverse';
import TrendingNow from '../components/TrendingNow';
import CategorySection from '../components/CategorySection';
import LiveParties from '../components/LiveParties';
import DailyChallenge from '../components/DailyChallenge';
import FeaturedCollections from '../components/FeaturedCollections';
import TopPlayers from '../components/TopPlayers';

export default function HomePage() {
  return (
    <>
      <DiscoveryHero
        onOpenQuiz={() => {}}
        onOpenParty={() => {}}
      />

      <QuickActions
        onOpenQuiz={() => {}}
        onOpenParty={() => {}}
      />

      <FootballUniverse onOpenQuiz={() => {}} />

      <TrendingNow />
      <CategorySection />
      <LiveParties onOpenParty={() => {}} />
      <DailyChallenge onOpenQuiz={() => {}} />
      <FeaturedCollections />
      <TopPlayers />
    </>
  );
}