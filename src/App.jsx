import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './AppLayout';
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import PartyPage from './pages/PartyPage';
import LeaderboardPage from './pages/LeaderboardPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="discover" element={<HomePage />} />
          <Route path="categories" element={<CategoriesPage />} />
          <Route path="party" element={<PartyPage />} />
          <Route path="leaderboards" element={<LeaderboardPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;