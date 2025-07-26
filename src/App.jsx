import './App.css';
import { Header } from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './Pages/home';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

