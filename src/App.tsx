import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import { initialGlobalState } from './store/module';
import NotFound from './pages/NotFound';
import 'highlight.js/styles/github.css';

function App() {
  initialGlobalState();
  if(import.meta.env.DEV) {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    );
  } else {
    return (
      <Router basename="/speech">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    );
  }
  
}

export default App;
