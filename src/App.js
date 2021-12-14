import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import HomePage from './pages/home';
import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import Navigation from './components/navigation';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="" element={<HomePage/>}/>
        <Route path="/:type" element={<HomePage/>} />
        <Route path="/:type/:id" element={<PetDetailsPage/>} />
        <Route path="/search" element={<SearchPage/>} />
        <Route path="/pet-details-not-found" element={<PetDetailsNotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
