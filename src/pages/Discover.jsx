import React from 'react';
import FootballUniverse from '../components/FootballUniverse';
import QuickActions from '../components/QuickActions';
import TrendingNow from '../components/TrendingNow';
import CategorySection from '../components/CategorySection';
import LiveParties from '../components/LiveParties';
import DailyChallenge from '../components/DailyChallenge';
import FeaturedCollections from '../components/FeaturedCollections';
import TopPlayers from '../components/TopPlayers';

export default function Discover() {
  return (
    <main>
      <FootballUniverse onOpenQuiz={() => {}} />
      <QuickActions onOpenQuiz={() => {}} onOpenParty={() => {}} />
      <TrendingNow onOpenQuiz={() => {}} />
      <CategorySection />
      <LiveParties onOpenParty={() => {}} />
      <DailyChallenge onOpenQuiz={() => {}} />
      <FeaturedCollections onOpenQuiz={() => {}} />
      <TopPlayers />
    </main>
  );
}