import {Routes, Route, useNavigate} from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { surahs } from './redux/actions/surahs';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import './App.css';
import Surah from './components/Surah/Surah';
import {useState} from 'react';

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(surahs());
  }, [dispatch])

  const navigate = useNavigate();

  const surahsNumber = useSelector(state => state.surahs);
  const [page, setPage] = useState(1);
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/surah/${page}`)
  }

  return (
    <>
      <Header />
      <div className='container w-100 d-flex justify-content-between align-items-center mt-3 mb-3'>
        <form className='d-flex justify-content form1' onSubmit={handleSubmit}>
          <select className="form-select m-1" aria-label="Default select example" onChange={(e) => setPage(e?.currentTarget.value)}>
            {surahsNumber?surahsNumber.map(surah => (
              <option key={surah?.number} value={`${surah?.number}`} onClick={() => navigate(`/surah/${surah?.number}`)}>{`${surah?.number}-${surah?.englishName} [${surah?.revelationType}]`}</option>
            )):""}
          </select>
          <button type='submit' className='btn btn-secondary m-1'>Open</button>
        </form>
      </div>
      <div className='content'>
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/surah/:id' element={<Surah />} /> 
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
