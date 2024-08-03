import { Route, MemoryRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import Waiting from './components/Waiting';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/waiting" element={<Waiting />} />
      </Routes>
    </Router>
  );
}
