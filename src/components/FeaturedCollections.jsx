import React from 'react';
import DiscoverySection from './discovery/DiscoverySection';

const FEATURED_ITEMS = [
  {
    id: 'gaming-history',
    title: 'Interactive Media & Gaming History',
    questions: 150,
    duration: '5 mins',
    difficulty: 'Medium',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'deep-ocean',
    title: 'Deep Ocean & Astrophysical Anomalies',
    questions: 120,
    duration: '4 mins',
    difficulty: 'Hard',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'world-architecture',
    title: 'World Architectural Monuments & Cartography',
    questions: 200,
    duration: '6 mins',
    difficulty: 'Expert',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'cinema-greats',
    title: 'Golden Age of Cinema & Film History',
    questions: 130,
    duration: '4 mins',
    difficulty: 'Medium',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80&auto=format&fit=crop',
  },
];

export default function FeaturedCollections({ onOpenQuiz }) {
  const items = FEATURED_ITEMS.map(item => ({
    ...item,
    onPlay: onOpenQuiz,
  }));

  return (
    <DiscoverySection
      title="Featured Collections"
      subtitle="Editorially curated quiz collections, updated weekly."
      onViewAll={onOpenQuiz}
      items={items}
    />
  );
}