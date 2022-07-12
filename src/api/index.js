import axios from 'axios';

const url = "https://api.alquran.cloud/surah/1";
export const getSurahs = () => axios.get(url);
