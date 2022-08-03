import React from 'react'
import {useNavigate} from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();
    return (
            <div className="container d-flex p-1 w-100  flex-column">
                <main className="px-3 text-center" dir='rtl'>
                    <h2 className='text-center fs-1'>بِسْمِ ٱللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</h2>
                    <p className="lead fs-1">﴿ لَوْ أَنزَلْنَا هَٰذَا الْقُرْآنَ عَلَىٰ جَبَلٍ لَّرَأَيْتَهُ خَاشِعًا مُّتَصَدِّعًا مِّنْ خَشْيَةِ اللَّهِ ۚ وَتِلْكَ الْأَمْثَالُ نَضْرِبُهَا لِلنَّاسِ لَعَلَّهُمْ يَتَفَكَّرُونَ (21) ﴾</p>
                    <p className="lead fs-2">Had We sent down this Quran on a mountain, you would surely have seen it humbling itself and rending asunder by the fear of Allah. Such are the parables which We put forward to mankind that they may reflect.</p>
                    <p className="lead fs-1">صَدَقَ اللهُ العظيمُ </p>
                    <p className="lead fs-3">سورة : الحشر - Al-Ḥashr  - الجزء : ( 28 )  -  الصفحة: ( 548 )</p>
                    <button className='btn btn-success' onClick={() => navigate(`/surah/${1}`)}>Get started</button>
                </main>
            </div>
    )
}

export default Home