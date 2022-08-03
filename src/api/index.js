import axios from 'axios';

const url = "https://api.alquran.cloud/surah";


export const getSurahs = () => axios.get(url);
