import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux';
const Home = () => {
    const [id, setId] = useState(Math.round(Math.random() * 114));

    
    const getRandom = () => {
        setId(Math.floor(Math.random() * 114));
    }
    const [ayahs, setAyahs] = useState([]);
    
    const surah = useSelector(state => state.surahs)[id];

    const [n, setN] = useState(Math.round(Math.random() * (surah?.numberOfAyahs / 2)))
    
    // const n =  ;


    useEffect(() => {
        async function getCurrentSurah(id) {
            const {data} = await axios.get(`https://api.alquran.cloud/surah/${id}`);
            setAyahs(data?.data?.ayahs)
        }
        getCurrentSurah(id);
    },[id])
    return (
            <div className="container d-flex p-1 w-100  flex-column">
                <main className="px-3 text-center" dir='rtl'>
                    <h2 className='text-center fs-1'>بِسْمِ ٱللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</h2>
                    <p className="fs-1 text-center" dir='rtl'>
                    ﴿
                    {(id !== null)? ayahs?.map((ayah, index) => (index >= n  && index <= n+3  ) && (
                        <span key={ayah?.number}>
                            <span className='ayat'>{ayah?.text}{ayah?.sajda}</span><span className='text-success'>({ayah?.numberInSurah})</span>
                        </span>
                    )):"لَوْ أَنزَلْنَا هَٰذَا الْقُرْآنَ عَلَىٰ جَبَلٍ لَّرَأَيْتَهُ خَاشِعًا مُّتَصَدِّعًا مِّنْ خَشْيَةِ اللَّهِ ۚ وَتِلْكَ الْأَمْثَالُ نَضْرِبُهَا لِلنَّاسِ لَعَلَّهُمْ يَتَفَكَّرُونَ (21)"}
                    ﴾
                    </p>
                    <p className="lead fs-1">صَدَقَ اللهُ العظيمُ </p>
                    <p className="lead fs-3 text-center" dir='rtl'>{id!==null?surah?.name:"سورة الحشر"} - {id!==null? surah?.englishName:"Al-Hashr"}</p>
                    <button className='btn btn-success' onClick={() => getRandom()}>Get Some Ayahs</button>
                </main>
            </div>
    )
}

export default Home