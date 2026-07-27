import React from 'react';
import DiscoverySection from './discovery/DiscoverySection';

const RECENT = [];

const RECOMMENDATIONS = [
  {
    id: 'rec-premier',
    title: 'Premier League',
    questions: 180,
    duration: '5 mins',
    difficulty: 'Medium',
    image: 'https://images.unsplash.com/photo-1626248801379-51a0748a5f96?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'rec-champions',
    title: 'UEFA Champions League',
    questions: 200,
    duration: '6 mins',
    difficulty: 'Hard',
    image: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'rec-world-cup',
    title: 'FIFA World Cup',
    questions: 240,
    duration: '7 mins',
    difficulty: 'Hard',
    image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'rec-cinema',
    title: 'Golden Age of Cinema',
    questions: 130,
    duration: '4 mins',
    difficulty: 'Medium',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'rec-science',
    title: 'Deep Space Exploration',
    questions: 110,
    duration: '4 mins',
    difficulty: 'Hard',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&q=80&auto=format&fit=crop',
  },
];

export default function ContinuePlaying({ onOpenQuiz }) {
  const items = RECENT.length > 0
    ? RECENT.map(item => ({ ...item, onPlay: onOpenQuiz }))
    : RECOMMENDATIONS.map(item => ({ ...item, onPlay: onOpenQuiz }));

  const hasHistory = RECENT.length > 0;

  return (
    <DiscoverySection
      title="Continue Playing"
      subtitle={
        hasHistory
          ? 'Pick up right where you left off.'
          : 'No recent activity yet — start with a collection picked for you.'
      }
      onViewAll={onOpenQuiz}
      items={items}
    />
  );
}