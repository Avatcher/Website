import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Homepage from './pages/Homepage';
import Projectspage from './pages/Projectspage';
import Contactpage from './pages/Contactpage';
import Infopage from './pages/Infopage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage/>}/>
        <Route path="/about-me" element={<Infopage/>}/>
        <Route path="/projects" element={<Projectspage/>}/>
        <Route path="/contact" element={<Contactpage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
