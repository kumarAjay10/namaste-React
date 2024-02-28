import RestaurantCard from "./ReasturantCard";
// import resObj from "../utils/mockData"; resObj
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfResturants, setListOfResturant] = useState([]);
  const [filiterResturant,setFilterResturant]= useState([]);
  const [searchText, setsearchText] = useState("");

  // whenever state variable updates, react triggers a reconcilation cycle(re-render the component)
  console.log("body rerenderd");
  useEffect(() => {
    // console.log("useEffect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3342725&lng=76.8648893&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // console.log(json);
    console.log(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // optional chaining
    setListOfResturant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterResturant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // conditional Rendering
  // if(listOfResturants.length===0){
  //      return  <Shimmer/>
  // }

  // console.log("body rendered")
  return listOfResturants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* <div className="search">search</div> */}
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);

            }}
          />
          <button className="btn"
            onClick={() => {
              console.log(searchText);
              const filteredResturant = listOfResturants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterResturant(filteredResturant);
              setsearchText("");
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterered = listOfResturants.filter(
              (res) => res.info.avgRating > 4
            );
            // console.log(filterered);
            setFilterResturant(filterered);
          }}
        >
          Top Rated restaurant
        </button>
      </div>
      <div className="res-container">
        {filiterResturant.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
    // resObj.map
  );
};

export default Body;
