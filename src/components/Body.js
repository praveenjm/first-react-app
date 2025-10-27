import RestaurantCard from "./RestaurantCard"
import restaurantList from "../utils/mochData";
import { useState, useEffect } from "react";

// responseData.data.cards[1].groupedCard.cardGroupMap.DISH.cards
const flexStyle= {display: "flex", gap: "20px", flexWrap: "wrap"};
const Body = () => {
    const [restaurantData, setRestaurantData] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const responseData = await fetch("https://www.swiggy.com/dapi/restaurants/search/v3?lat=13.0035068&lng=77.5890953&str=Biryani&trackingId=89e6225f-efaf-2eef-808d-d124ef92b631&submitAction=ENTER&queryUniqueId=04383e74-4ee1-b6b2-f07c-63f7ceb9f74d");
        // console.log(responseData)
        // const extractData = responseData.data.cards[1].groupedCard.cardGroupMap.DISH.cards.shift();
        const jsonData = await responseData.json();
        // console.log(jsonData)
        let extractData = jsonData.data.cards[1].groupedCard.cardGroupMap.DISH.cards;
        extractData = extractData.slice(50,60);
        // console.log(extractData)
        // extractData.slice(2, 20);
        console.log(extractData)
        // console.log(json.data.cards[1].groupedCard.cardGroupMap.DISH.cards)
        setRestaurantData(extractData);
    }
    return (
        <div className="body">
        <div className="filter">
            <button onClick={() => {
                const filteredData = restaurantData.filter((restaurant) => restaurant?.card?.card?.restaurant?.info?.avgRating<4.2)
                setRestaurantData(filteredData);
            }}>Show top rated restaurants</button>  
        </div>
        <div className="restaurantContainer" style={flexStyle}>
            {
                
                restaurantData.map((restaurant) => {
                    // console.log(restaurant?.card?.card?.restaurant?.info?.id, restaurant?.card?.card?.restaurant?.info?.name)
                    return <RestaurantCard key={restaurant?.card?.card?.info?.id} resData = {restaurant?.card?.card?.restaurant?.info} />
                })
            }
        </div>
        </div>
    )
};

export default Body;