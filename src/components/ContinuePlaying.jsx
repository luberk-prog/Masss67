import React from 'react';
import DiscoverySection from './DiscoverySection';
import CollectionTile from './CollectionTile';

const RECENT = [];

const RECOMMENDATIONS = [
  {
    id: 'rec-premier',
    title: 'Premier League',
    category: 'Football',
    description: 'Test your knowledge of England\'s top flight.',
    questions: 180,
    difficulty: 'Medium',
    duration: '5 mins',
    image: 'https://images.unsplash.com/photo-1626248801379-51a0748a5f96?w=700&q=80&auto=format&fit=crop',
  },
  {
    id: 'rec-champions',
    title: 'UEFA Champions League',
    category: 'Football',
    description: 'Europe\'s greatest club competition.',
    questions: 200,
    difficulty: 'Hard',
    duration: '6 mins',
    image: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=700&q=80&auto=format&fit=crop',
  },
  {
    id: 'rec-world-cup',
    title: 'FIFA World Cup',
    category: 'Football',
    description: 'Every tournament, every unforgettable moment.',
    questions: 240,
    difficulty: 'Hard',
    duration: '7 mins',
    image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=700&q=80&auto=format&fit=crop',
  },
  {
    id: 'rec-cinema',
    title: 'Golden Age of Cinema',
    category: 'Movies',
    description: 'Classic films and the directors who shaped them.',
    questions: 130,
    difficulty: 'Medium',
    duration: '4 mins',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=700&q=80&auto=format&fit=crop',
  },
  {
    id: 'rec-science',
    title: 'Deep Space Exploration',
    category: 'Science',
    description: 'From the solar system to distant galaxies.',
    questions: 110,
    difficulty: 'Hard',
    duration: '4 mins',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=700&q=80&auto=format&fit=crop',
  },
];

export default function ContinuePlaying({ onOpenQuiz }) {
  const hasHistory = RECENT.length > 0;
  const items = hasHistory ? RECENT : RECOMMENDATIONS;

  return (
    <DiscoverySection
      title="Continue Playing"
      subtitle={
        hasHistory
          ? 'Pick up right where you left off.'
          : 'No recent activity yet — start with a collection picked for you.'
      }
      onViewAll={onOpenQuiz}
    >
      {items.map(item => (
        <CollectionTile
          key={item.id}
          title={item.title}
          category={item.category}
          description={item.description}
          image={item.image}
          questionCount={item.questions}
          difficulty={item.difficulty}
          estimatedDuration={item.duration}
          onPlay={onOpenQuiz}
        />
      ))}
    </DiscoverySection>
  );
}
