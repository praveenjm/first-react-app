import RestaurantCard from "./RestaurantCard"
import restaurantList from "../utils/mochData";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
// responseData.data.cards[1].groupedCard.cardGroupMap.DISH.cards
const flexStyle= {display: "flex", gap: "20px", flexWrap: "wrap"};
const Body = () => {
    const [restaurantData, setRestaurantData] = useState([]);
    // const restaurantData = filteredList;
    const [filteredList, setFilteredList] = useState([]);
    const [searchText, setSearchText] = useState("");
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const responseData = await fetch("https://www.swiggy.com/dapi/restaurants/search/v3?lat=13.0035068&lng=77.5890953&str=Biryani&trackingId=89e6225f-efaf-2eef-808d-d124ef92b631&submitAction=ENTER&queryUniqueId=04383e74-4ee1-b6b2-f07c-63f7ceb9f74d");
        const jsonData = await responseData.json();
        let extractData = jsonData.data.cards[1].groupedCard.cardGroupMap.DISH.cards;
        extractData = extractData.slice(1,60);
        setRestaurantData(extractData);
        setFilteredList(extractData); 
    }
    return restaurantData.length ===0 ? <Shimmer/> : (
        <div className="body">
        <div className="filter">
            <div className="searchBox">
                <input type="text" className="searchInput" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
            </div>
            <button onClick={()=> {
                const filterData = restaurantData.filter((resData) => (resData?.card?.card?.restaurant?.info?.name).toLowerCase().includes(searchText.toLowerCase()));
                console.log(restaurantData)
                setFilteredList(filterData)
            }}>
                Search  
            </button>
            <button onClick={() => {
                const filteredData = restaurantData.filter((restaurant) => restaurant?.card?.card?.restaurant?.info?.avgRating>4.4)
                console.log(filteredData)
                setFilteredList(filteredData);
            }}>Show top rated restaurants</button>  
        </div>
        <div className="restaurantContainer" style={flexStyle}>
            {
                filteredList.map((restaurant) => {
                    console.log(restaurant?.card?.card?.info?.id);
                //    return <RestaurantCard key={restaurant?.card?.card?.info?.id} resData = {restaurant?.card?.card?.restaurant?.info} />
                    return <Link to="/restaurants/46463427" key={restaurant?.card?.card?.info?.id}><RestaurantCard resData = {restaurant?.card?.card?.restaurant?.info} /></Link>
                })
            }
        </div>
        </div>
    )
};

export default Body;