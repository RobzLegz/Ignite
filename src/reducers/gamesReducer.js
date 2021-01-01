import axios from "axios";

const initialState = {
    popular : [],
    newGames : [],
    upcomingGames : [],
    searched : [],
};

const gamesReducer = (state=initialState, action) => {
    switch(action.type){
        case "FETCH_GAMES":
            return {...state, popular: action.payload.popular}
        default:
            return {...state}
    }
}

//Action creator
const fetchGames = (userData) => {
    return{
        type: "FETCH_GAMES",
    };
};

export default gamesReducer;