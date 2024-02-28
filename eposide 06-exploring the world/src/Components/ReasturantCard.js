import {CDN_URL} from "../utils/constants"




const RestaurantCard = (props) => {
  // const {resName,cusine}=props;

  const { resData } = props;
  const { cloudinaryImageId, cuisines, avgRating, name } = resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={
          CDN_URL +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} starts</h4>
      <h4>{resData.info.sla.deliveryTime} min</h4>
    </div>
  );
};

export default RestaurantCard;