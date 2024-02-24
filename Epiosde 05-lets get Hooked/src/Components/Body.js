import RestaurantCard from "./ReasturantCard";
import resObj from "../utils/mockData";
import { useState } from "react";


const Body = () => {

  const [listOfResturants,setListOfResturant]=useState(resObj);
    return (
      <div className="body">
        {/* <div className="search">search</div> */}
        <div className="filter">
             <button className="filter-btn" onClick={()=>{
              const filterered = listOfResturants.filter(
                (res)=> res.info.avgRating > 4
              );
              // console.log(filterered);
               setListOfResturant(filterered);
             }}
             >
                Top Rated restaurant
             </button>
        </div>
        <div className="res-container">
        
          {listOfResturants.map((restaurant) => {
            return <RestaurantCard key={restaurant.info.id} resData={restaurant} />;
          })}
        </div>
      </div>
      // resObj.map
    );
  };


  export default Body;