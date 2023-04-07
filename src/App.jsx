import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Films from './pages/Films';
import Home from './pages/Home';
import Search from './pages/Search';
import Serials from './pages/Serials';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/films' element={<Films />} />
        <Route path='/serials' element={<Serials />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
