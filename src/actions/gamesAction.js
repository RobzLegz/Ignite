import axios from "axios";
import {popularGamesURL} from "../api";

//Action creator

export const loadGames = () => async (dispatch) => {
    //Fetch axios
    const popularData = await axios.get(popularGamesURL()); //waits for the information to load
    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular: popularData.data.results, 
        },
    });
};