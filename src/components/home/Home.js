import React from 'react'
import {useSelector} from 'react-redux'
const Home = () => {
    const surah = useSelector(state => state.surahs);
    console.log(surah);
    return (
        <>
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
            <header className="mb-auto">
                <div>

                </div>
            </header>

            <main className="px-3 text-center" dir='rtl'>
                <h2 className='text-center'>بِسْمِ ٱللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</h2>
                <p className="lead fs-2">لَوْ أَنزَلْنَا هَٰذَا الْقُرْآنَ عَلَىٰ جَبَلٍ لَّرَأَيْتَهُ خَاشِعًا مُّتَصَدِّعًا مِّنْ خَشْيَةِ اللَّهِ ۚ وَتِلْكَ الْأَمْثَالُ نَضْرِبُهَا لِلنَّاسِ لَعَلَّهُمْ يَتَفَكَّرُونَ (21)</p>
                <p className="lead fs-2">
                    صَدَقَ اللهُ العظيمُ 
                </p>
            </main>
        </div>
        </>
    )
}

export default Home