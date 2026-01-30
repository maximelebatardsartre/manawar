import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Layout } from './components/Layout';
import Home from './pages/Home';
import Concept from './pages/Concept';
import Rules from './pages/Rules';
import Vote from './pages/Vote';
import Players from './pages/Players';
import Register from './pages/Register';
import Organizers from './pages/Organizers';

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/concept" element={<Concept />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/vote" element={<Vote />} />
        <Route path="/players" element={<Players />} />
        <Route path="/register" element={<Register />} />
        <Route path="/organizers" element={<Organizers />} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </Router>
  );
};

export default App;