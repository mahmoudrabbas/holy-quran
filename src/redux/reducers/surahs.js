import { FETCH_ALL_SURAHS } from './../actions/types';


const surahsReducer = ( surahs=[], action ) => {
    switch (action.type) {
        case FETCH_ALL_SURAHS:
            return action.payload;
        default:
            return surahs;
    }
}

export default surahsReducer;