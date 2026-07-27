import React from 'react';
import DiscoverySection from './discovery/DiscoverySection';

const FOOTBALL_ITEMS = [
  {
    id: 'premier-league',
    title: 'Premier League',
    questions: 250,
    duration: '5 mins',
    difficulty: 'Medium',
    image: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'champions-league',
    title: 'UEFA Champions League',
    questions: 200,
    duration: '6 mins',
    difficulty: 'Hard',
    image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'world-cup',
    title: 'FIFA World Cup',
    questions: 300,
    duration: '7 mins',
    difficulty: 'Hard',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'la-liga',
    title: 'La Liga',
    questions: 180,
    duration: '4 mins',
    difficulty: 'Medium',
    image: 'https://images.unsplash.com/photo-1626248801379-51a0748a5f96?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'serie-a',
    title: 'Serie A',
    questions: 160,
    duration: '4 mins',
    difficulty: 'Medium',
    image: 'https://images.unsplash.com/photo-1551958219-acbc595d8c83?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'bundesliga',
    title: 'Bundesliga',
    questions: 140,
    duration: '4 mins',
    difficulty: 'Medium',
    image: 'https://images.unsplash.com/photo-1519766304817-4f37bda74a26?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'europa-league',
    title: 'Europa League',
    questions: 170,
    duration: '5 mins',
    difficulty: 'Medium',
    image: 'https://images.unsplash.com/photo-1540747913346-19212a4b423a?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'afcon',
    title: 'AFCON',
    questions: 120,
    duration: '3 mins',
    difficulty: 'Medium',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'uefa-euro',
    title: 'UEFA Euro',
    questions: 220,
    duration: '5 mins',
    difficulty: 'Hard',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'mls',
    title: 'MLS',
    questions: 100,
    duration: '3 mins',
    difficulty: 'Medium',
    image: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=800&q=80&auto=format&fit=crop',
  },
];

export default function FootballUniverse({ onOpenQuiz }) {
  const items = FOOTBALL_ITEMS.map(item => ({
    ...item,
    onPlay: onOpenQuiz,
  }));

  return (
    <DiscoverySection
      title="Football Universe"
      subtitle="Explore competitions, clubs and legendary tournaments."
      onViewAll={onOpenQuiz}
      items={items}
    />
  );
}