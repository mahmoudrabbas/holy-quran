import { combineReducers } from "redux";
import surahsReducer from "./surahs.js";


export default combineReducers({
    surahs:surahsReducer
})