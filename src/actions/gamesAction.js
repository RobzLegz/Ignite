import axios from "axios";
import {popularGamesURL, upcomingGamesURL, newGamesURL} from "../api";

//Action creator

export const loadGames = () => async (dispatch) => {
    //Fetch axios
    const popularData = await axios.get(popularGamesURL()); //waits for the information to load
    const upcomingData = await axios.get(upcomingGamesURL());
    const newGamesData = await axios.get(newGamesURL());

    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular: popularData.data.results, 
            upcoming: upcomingData.data.results,
            new: newGamesData.data.results,
        },
    });
};