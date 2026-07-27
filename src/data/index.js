export const COLLECTIONS = [
  {
    id: 'premier-league',
    title: 'Premier League',
    subtitle: 'England\'s top flight',
    questions: 250,
    collections: 12,
    difficulty: 'Medium',
    duration: '5 mins',
    image: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'champions-league',
    title: 'UEFA Champions League',
    subtitle: 'Europe\'s premier club competition',
    questions: 200,
    collections: 8,
    difficulty: 'Hard',
    duration: '6 mins',
    image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'world-cup',
    title: 'FIFA World Cup',
    subtitle: 'Global tournament history',
    questions: 300,
    collections: 15,
    difficulty: 'Hard',
    duration: '7 mins',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'la-liga',
    title: 'La Liga',
    subtitle: 'Spanish football',
    questions: 180,
    collections: 10,
    difficulty: 'Medium',
    duration: '4 mins',
    image: 'https://images.unsplash.com/photo-1626248801379-51a0748a5f96?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'serie-a',
    title: 'Serie A',
    subtitle: 'Italian football legacy',
    questions: 160,
    collections: 9,
    difficulty: 'Medium',
    duration: '4 mins',
    image: 'https://images.unsplash.com/photo-1551958219-acbc595d8c83?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'bundesliga',
    title: 'Bundesliga',
    subtitle: 'German football',
    questions: 140,
    collections: 8,
    difficulty: 'Medium',
    duration: '4 mins',
    image: 'https://images.unsplash.com/photo-1519766304817-4f37bda74a26?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'europa-league',
    title: 'Europa League',
    subtitle: 'European club cups',
    questions: 170,
    collections: 7,
    difficulty: 'Medium',
    duration: '5 mins',
    image: 'https://images.unsplash.com/photo-1540747913346-19212a4b423a?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'afcon',
    title: 'AFCON',
    subtitle: 'African football championships',
    questions: 120,
    collections: 6,
    difficulty: 'Medium',
    duration: '3 mins',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'uefa-euro',
    title: 'UEFA Euro',
    subtitle: 'European national team tournament',
    questions: 220,
    collections: 11,
    difficulty: 'Hard',
    duration: '5 mins',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'mls',
    title: 'MLS',
    subtitle: 'Major League Soccer',
    questions: 100,
    collections: 5,
    difficulty: 'Medium',
    duration: '3 mins',
    image: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=800&q=80&auto=format&fit=crop',
  },
];

export const CATEGORIES = [
  { id: 'football', title: 'Football', icon: '⚽', color: 'var(--accent)' },
  { id: 'science', title: 'Science', icon: '🔬', color: '#22C55E' },
  { id: 'history', title: 'History', icon: '🏛️', color: '#F59E0B' },
  { id: 'politics', title: 'Politics', icon: '🏛️', color: '#8B5CF6' },
  { id: 'movies', title: 'Movies', icon: '🎬', color: '#EF4444' },
  { id: 'music', title: 'Music', icon: '🎵', color: '#14B8A6' },
  { id: 'gaming', title: 'Gaming', icon: '🎮', color: '#F472B6' },
  { id: 'technology', title: 'Technology', icon: '💻', color: '#3B82F6' },
  { id: 'geography', title: 'Geography', icon: '🌍', color: '#10B981' },
];

export const LEADERBOARD = [
  { rank: 1, name: 'Vortex_X', title: 'SEASON 4 WORLD CHAMPION', rating: '3,420 ELO', winRate: '89.4%', points: '14,890 PTS' },
  { rank: 2, name: 'AstroGeek_X', title: 'GEOGRAPHY GRANDMASTER', rating: '3,210 ELO', winRate: '86.1%', points: '12,450 PTS' },
  { rank: 3, name: 'CyberQueen', title: 'SPEEDRUNNER TITAN', rating: '3,145 ELO', winRate: '84.8%', points: '11,920 PTS' },
  { rank: 4, name: 'ApexPredictor', title: 'GRANDMASTER', rating: '3,080 ELO', winRate: '82.5%', points: '10,850 PTS' },
  { rank: 5, name: 'ShadowKnight_99', title: 'DIAMOND III', rating: '2,990 ELO', winRate: '81.2%', points: '9,720 PTS' },
];

export const PROFILE = {
  name: 'Vortex_X',
  title: 'SEASON 4 WORLD CHAMPION',
  avatar: 'VX',
  level: 42,
  xp: 125000,
  xpToNext: 150000,
  collections: 18,
  quizzesCompleted: 842,
  winRate: '87.3%',
  streak: 5,
  badges: [
    { id: 'world-champ', name: 'World Champion', earned: true },
    { id: 'speedrun', name: 'Speed Runner', earned: true },
    { id: 'geography', name: 'Geography Master', earned: true },
    { id: 'streak', name: '5-Day Streak', earned: true },
  ],
  recentActivity: [
    { type: 'completed', title: 'Premier League Collection', time: '2 hours ago' },
    { type: 'won', title: 'Champions League Quiz', time: '5 hours ago' },
    { type: 'joined', title: 'Friday Night Party', time: '1 day ago' },
  ],
};

export const DAILY_CHALLENGE = {
  title: 'Daily Trivia Gauntlet',
  subtitle: 'Complete today\'s mixed discipline gauntlet',
  questions: 10,
  streak: 5,
  reward: { xp: 5000, chest: true },
  timeRemaining: '14h 22m',
  difficulty: 'Medium',
};

export const PARTY = {
  id: 'F7K2M9',
  name: 'Friday Night Football',
  host: 'Vortex_X',
  players: [
    { id: '1', name: 'Vortex_X', ready: true, avatar: 'VX' },
    { id: '2', name: 'AstroGeek_X', ready: true, avatar: 'AG' },
    { id: '3', name: 'CyberQueen', ready: false, avatar: 'CQ' },
  ],
  maxPlayers: 10,
  quiz: { title: 'Premier League', questions: 10, time: '5 mins' },
  status: 'waiting',
};

export const QUIZ = {
  id: 'quiz-premier-league',
  title: 'Premier League',
  questions: 10,
  timeLimit: '5 mins',
  currentQuestion: 1,
  answers: [],
  results: null,
};

export const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=1800&q=85&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=1800&q=85&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=1800&q=85&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1626248801379-51a0748a5f96?w=1800&q=85&auto=format&fit=crop',
];

export const TODAY_CHALLENGE = {
  competition: 'Premier League',
  difficulty: 'Medium',
  questions: 10,
  playersOnline: '1,240',
  avgScore: '78%',
  estimatedTime: '5 mins',
};