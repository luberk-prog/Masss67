import React from 'react';
import DiscoverySection from './discovery/DiscoverySection';

const TRENDING_ITEMS = [
  {
    id: 'football-cl',
    title: 'UEFA Champions League & World Football',
    questions: 200,
    duration: '6 mins',
    difficulty: 'Hard',
    image: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'gaming-lore',
    title: 'Gaming & Interactive Media History',
    questions: 150,
    duration: '4 mins',
    difficulty: 'Medium',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'ai-tech',
    title: 'Computer Science & Software Architecture',
    questions: 120,
    duration: '5 mins',
    difficulty: 'Expert',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'ancient-history',
    title: 'Ancient Empires & Classical Warfare',
    questions: 140,
    duration: '4 mins',
    difficulty: 'Medium',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'space-science',
    title: 'Astrophysics & Deep Space Exploration',
    questions: 110,
    duration: '4 mins',
    difficulty: 'Hard',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'cinema',
    title: 'Golden Age of Cinema & Film History',
    questions: 130,
    duration: '4 mins',
    difficulty: 'Medium',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80&auto=format&fit=crop',
  },
];

export default function TrendingNow({ onOpenQuiz }) {
  const items = TRENDING_ITEMS.map(item => ({
    ...item,
    onPlay: onOpenQuiz,
  }));

  return (
    <DiscoverySection
      title="Trending Right Now"
      subtitle="The most active collections across the platform."
      onViewAll={onOpenQuiz}
      items={items}
    />
  );
}