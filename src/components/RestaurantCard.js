import { IMG_CDN } from "../utils/constans";

const RestaurantCard = (props) => {
    const {resData} = props;
    // console.log(resData)
    const {name, cloudinaryImageId, locality, costForTwo, avgRatingString} = resData;
    return (
    <div>
        <h4>{name}</h4>
        <img src={IMG_CDN+cloudinaryImageId} />
        <div>{locality}</div>
        <div>{costForTwo}</div>
        <div>{avgRatingString}</div>
    </div>
    )
};

export default RestaurantCard;