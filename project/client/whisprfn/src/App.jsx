import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import JournalPage from './pages/JournalPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/journal" element={<JournalPage />} />
      </Routes>
    </Router>
  );
}

export default App;
