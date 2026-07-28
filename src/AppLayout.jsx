import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function AppLayout() {
  return (
    <div className="app-layout">
      <Navbar />
      <div className="page-container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}