import axios from "axios";
import {popularGamesURL, upcomingGamesURL, newGamesURL, searchGameUrl} from "../api";

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

export const fetchSearch = (game_name) => async(dispatch) => {
    const searchGames = await axios.get(searchGameUrl(game_name));
    dispatch({
        type: "FECH_SEARCHED",
        payload:{
            searched: searchGames.data.results,
        },
    });
};