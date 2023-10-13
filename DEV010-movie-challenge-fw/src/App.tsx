//import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Movie from './components/Movie';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" Component= {Home} />
        <Route path="/movie" Component= {Movie} />
      </Routes>
    </Router>
  );
};

export default App;
