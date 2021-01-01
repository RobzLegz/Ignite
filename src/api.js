//Base URL
const base_url = "https://api.rawg.io/api/";

//Get current month
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if(month < 10){
        return`0${month}`;
    }else{
        return month;
    }
};

//Get current day
const getCurrentDay = () => {
    const day = new Date().getDate();
    if(day < 10){
        return`0${day}`;
    }else{
        return day;
    }
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular games api part
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`; //size=10 --- how many games do you want to fetch
//Upcoming games api part
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
//New games api part
const new_games = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

//Export url for different games
export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`; 
export const newGamesURL = () => `${base_url}${new_games}`;

