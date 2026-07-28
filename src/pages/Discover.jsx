import React from 'react';
import FootballUniverse from '../components/FootballUniverse';
import QuickActions from '../components/QuickActions';
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
      <TrendingSection onOpenQuiz={() => {}} />
      <CategorySection />
      <LiveParties onOpenParty={() => {}} />
      <DailyChallenge onOpenQuiz={() => {}} />
      <FeaturedCollections onOpenQuiz={() => {}} />
      <TopPlayers />
    </main>
  );
}

function TrendingSection({ onOpenQuiz }) {
  const trendingItems = [
    { id: 'champions-league', title: 'UEFA Champions League', questions: 200, duration: '6 mins', difficulty: 'Hard', image: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=800&q=80&auto=format&fit=crop' },
    { id: 'world-cup', title: 'FIFA World Cup', questions: 240, duration: '7 mins', difficulty: 'Hard', image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&q=80&auto=format&fit=crop' },
    { id: 'la-liga', title: 'La Liga', questions: 180, duration: '4 mins', difficulty: 'Medium', image: 'https://images.unsplash.com/photo-1626248801379-51a0748a5f96?w=800&q=80&auto=format&fit=crop' },
  ];

  return (
    <section style={{ padding: '56px 0 0' }}>
      <div style={{ maxWidth: '1520px', margin: '0 auto', padding: '0 32px', marginBottom: '24px' }}>
        <h2 style={{ fontFamily: 'var(--f-head)', fontSize: '24px', fontWeight: 800, color: 'var(--text)', marginBottom: '4px' }}>
          Trending Now
        </h2>
        <p style={{ fontSize: '14px', color: 'var(--text-3)' }}>
          The most active collections across the platform.
        </p>
      </div>
      <div style={{ display: 'flex', gap: '16px', overflowX: 'auto', padding: '4px 32px 32px', scrollSnapType: 'x mandatory' }}>
        {trendingItems.map(item => (
          <div key={item.id} onClick={onOpenQuiz} className="discovery-card">
            <img src={item.image} alt={item.title} className="discovery-card__img" />
            <div className="discovery-card__overlay" />
            <div className="discovery-card__content">
              <h3 className="discovery-card__title">{item.title}</h3>
              <div className="discovery-card__meta">
                <span>{item.questions} Questions</span>
                <span>{item.duration}</span>
                <span>{item.difficulty}</span>
              </div>
              <button className="discovery-card__play"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21" /></svg></button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}