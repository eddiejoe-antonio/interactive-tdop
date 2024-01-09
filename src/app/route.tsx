import HomePage from '@/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const TheRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default TheRoutes;
