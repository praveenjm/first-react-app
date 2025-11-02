import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import restaurantMenuItems from "../utils/restaurantMenuItems";
import { RESTAURANT_MENU_URL } from "../utils/constans";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null)
    const resid = useParams;
    useEffect(() => {
        setResInfo(restaurantMenuItems.data);
    }, []);
    console.log(resInfo)
    // const fetchMenu = async () => {
    //     // const data = await fetch(
    //     //     `https://api.cors.lol/?url=https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0035068&lng=77.5890953&restaurantId=535659&catalog_qa=undefined&query=Biryani&metaData=%7B%22type%22%3A%22DISH%22%2C%22data%22%3A%7B%22vegIdentifier%22%3A%22NA%22%2C%22cloudinaryId%22%3A%22Autosuggest%2FTop%2520200%2520queries%2FBiryani.png%22%2C%22dishFamilyId%22%3A%22846613%22%2C%22dishFamilyIds%22%3A%5B%22846613%22%5D%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Dish%22%7D&submitAction=SUGGESTION`
    //     // );
    //     // const resInfo = restaurantMenuItems.data;
    //     setResInfo(restaurantMenuItems.data);
    // };
    if(resInfo === null) return <Shimmer />

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2].card.card.info;
    const itemCards = resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;
    console.log(itemCards)
    itemCards.map((itemCard) => {
                        console.log(itemCard.card)
                        // return <li key={itemCard?.info?.id}>{itemCard?.info?.name}</li>;
                    })
    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {
                    // console.log(itemCards)
                    itemCards.map((itemCard) => {
                        console.log(itemCard?.info?.id)
                        return <li key={itemCard?.card?.info?.id}>{itemCard?.card?.info?.name}</li>;
                    })
                }
            </ul>
        </div>
    );
};

export default RestaurantMenu;