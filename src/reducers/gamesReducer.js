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
            return {...state}
        default:
            return {...state}
    }
}

//Action creator
const fetchGames = () => {
    return{
        type: "FETCH_GAMES",
    };
};

export default gamesReducer;