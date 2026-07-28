import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './AppLayout';
import DashboardPage from './pages/DashboardPage';
import FootballCollectionsPage from './pages/FootballCollectionsPage';
import GlobalRankingsPage from './pages/GlobalRankingsPage';
import EliteArenaPage from './pages/EliteArenaPage';
import './styles/stitch.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="collections" element={<FootballCollectionsPage />} />
          <Route path="rankings" element={<GlobalRankingsPage />} />
          <Route path="arena" element={<EliteArenaPage />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;