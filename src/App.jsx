// App.js (or Layout.js)
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <div className="app flex">
        <Sidebar />
        <main className="main-content w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
