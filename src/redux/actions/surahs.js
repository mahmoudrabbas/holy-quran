import * as api from '../../api/index.js';
import { FETCH_ALL_SURAHS } from './types';


export const surahs = () => async(dispatch) => {
    try {
        const { data } = await api.getSurahs();
        dispatch({ type:FETCH_ALL_SURAHS, payload:data });
    } catch (error) {
        console.log(error);
    }
}