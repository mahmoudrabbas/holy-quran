import {Routes, Route} from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { surahs } from './redux/actions/surahs';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(surahs());
  }, [dispatch])

  return (
    <div className="App">
      <Header />
      <div className='content'>
        <Routes>
          <Route path='/' element={<Home />} /> 
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
