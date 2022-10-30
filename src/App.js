import logo from './logo.svg';
import './App.css';

import { useEffect } from 'react';
import SearchForm from './components/SearchForm';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './screens/Home';
import PreferedHotels from './screens/PreferedHotels';
import PreferedDestinations from './screens/PreferedDestinations';


function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PreferedDestinations" element={<PreferedDestinations />} />
        <Route path="/PreferedHotels/:id" element={<PreferedHotels />} />
      </Routes>
    </Router>
  );
}

export default App;
