//Base URL
const base_url = "https://api.rawg.io/api/";

//Get current time
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if(month < 10){
        return`0${month}`;
    }else{
        return month;
    }
};
const getCurrentDay = () => {
    const day = new Date().getDate();
    if(day < 10){
        return`0${day}`;
    }else{
        return day;
    }
};
const currentYear = new Date().getFullYear();
const currentMonth= new Date().getCurrentMonth();
const currentDay = new Date().getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular games api part
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`; //size=10 --- how many games do you want to fetch

//Export popular games url
export const popularGamesURL = () => `${base_url}${popular_games}`;
