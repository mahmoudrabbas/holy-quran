import React from 'react'
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Surah = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [ayahs, setAyahs] = useState([]);

    const surah = useSelector(state => state.surahs)[parseInt(id)-1];
    console.log(surah)



    useEffect(() => {
        async function getCurrentSurah(id) {
            const {data} = await axios.get(`https://api.alquran.cloud/surah/${id}`);
            setAyahs(data.data.ayahs)
        }
        getCurrentSurah(id);
    },[id])


    console.log(ayahs);
    const style = { textAlign:"justify"};


    
    return (
            <div className="container d-flex p-1 w-100 flex-column">
                <main className="px-3 text-center">
                    <h2 className='text-center fs-1' dir='rtl'>بِسْمِ ٱللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</h2>
                    <p className="lead fs-1" dir='rtl'> ﴿

                    {ayahs?.map(ayah => (
                        <span key={ayah.number}>
                            {" "}{ayah.text} {ayah.sajda} ({ayah.numberInSurah})
                        </span>
                    ))}
                    ﴾
                    
                    </p>
                    <p className="lead fs-1" dir='rtl'>صَدَقَ اللهُ العظيمُ </p>
                    <p className="lead fs-3" id="quran" style={style} dir='rtl'>{surah?.name} - {surah?.englishName}</p>
                    <div className='d-flex justify-content-between'>
                        {parseInt(id) ===  1 ? (
                            <button className='btn m-1' onClick={() => navigate(`/home`)}><i className="fa-solid fa-angle-left"></i> Previous</button>
                        ):(
                            <button className='btn m-1 ' onClick={() => navigate(`/surah/${parseInt(id)-1}`)}><i className="fa-solid fa-angle-left"></i> Previous</button>
                        )}
                        <button className='btn m-1 ' onClick={() => navigate(`/surah/${parseInt(id)+1}`)}>Next <i className="fa-solid fa-angle-right"></i></button>
                    </div>
                </main>
            </div>
    )
}

export default Surah