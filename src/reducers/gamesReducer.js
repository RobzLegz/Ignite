import axios from "axios";

const initialState = {
    popular : [],
    newGames : [],
    upcoming : [],
    searched : [],
};

const gamesReducer = (state=initialState, action) => {
    switch(action.type){
        case "FETCH_GAMES":
            return {...state, 
                popular: action.payload.popular,
                newGames: action.payload.new,
                upcoming: action.payload.upcoming,
            };
        default:
            return {...state};
    }
}

//Action creator
const fetchGames = (userData) => {
    return{
        type: "FETCH_GAMES",
    };
};

export default gamesReducer;