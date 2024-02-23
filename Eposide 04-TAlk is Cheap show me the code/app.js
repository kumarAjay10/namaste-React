import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 * -logo
 * -nav Items
 * body
 * -search
 * -ResturantContainer
 * -Resturantcard
 * -ing
 * -name of res, star rating,cuisine, delivery time
 * Footer
 * -copyright
 * -links
 * -contact
 * -Address
 */
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// inline style
const styleCard = {
  backGroundColor: "yellow",
};

// const RestaurantCard = (props)=>{
//   console.log(props);
//   return(
//     <div className="res-card" style={styleCard}>
//       <img className="res-logo" alt="res-logo" src="https://b.zmtcdn.com/data/pictures/chains/1/50691/ecfdc75d21bd7cd9d880f05c8382bc65.jpg"/>
// <h3>Meghana Foods</h3>
// <h4>Biryani,North Indian,Asian</h4>
// <h4>4.4 starts</h4>
// <h4>38 minutes</h4>
//     </div>
//   )
// }

// using props
// const RestaurantCard = (props)=>{
//   console.log(props);
//   return(
//     <div className="res-card" style={styleCard}>
//       <img className="res-logo" alt="res-logo" src="https://b.zmtcdn.com/data/pictures/chains/1/50691/ecfdc75d21bd7cd9d880f05c8382bc65.jpg"/>
// <h3>{props.resName}</h3>
// <h4>{props.cusine}</h4>
// <h4>4.4 starts</h4>
// <h4>38 minutes</h4>
//     </div>
//   )
// }

// destructuring
// const {resName,cusine}= props
// const RestaurantCard = ({resName,cusine})=>{
//   return(
//     <div className="res-card" style={styleCard}>
//       <img className="res-logo" alt="res-logo" src="https://b.zmtcdn.com/data/pictures/chains/1/50691/ecfdc75d21bd7cd9d880f05c8382bc65.jpg"/>
// <h3>{resName}</h3>
// <h4>{cusine}</h4>
// <h4>4.4 starts</h4>
// <h4>38 minutes</h4>
//     </div>
//   )
// }

// Data of 1 resturant
// const resObj = {
//   info: {
//     id: "447997",
//     name: "Pizza Hut",
//     cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
//     locality: "Lahoti Business Center",
//     areaName: "Badepur",
//     costForTwo: "₹350 for two",
//     cuisines: ["Pizzas"],
//     avgRating: 4.1,
//     parentId: "721",
//     avgRatingString: "4.1",
//     totalRatingsString: "500+",
//     sla: {
//       deliveryTime: 28,
//       lastMileTravel: 1.8,
//       serviceability: "SERVICEABLE",
//       slaString: "25-30 mins",
//       lastMileTravelString: "1.8 km",
//       iconType: "ICON_TYPE_EMPTY",
//     },
//     availability: {
//       nextCloseTime: "2024-02-24 01:00:00",
//       opened: true,
//     },
//     badges: {},
//     isOpen: true,
//     type: "F",
//     badgesV2: {
//       entityBadges: {
//         imageBased: {},
//         textBased: {},
//         textExtendedBadges: {},
//       },
//     },
//     aggregatedDiscountInfoV3: {
//       header: "20% OFF",
//       subHeader: "UPTO ₹50",
//     },
//     differentiatedUi: {
//       displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//       differentiatedUiMediaDetails: {
//         mediaType: "ADS_MEDIA_ENUM_IMAGE",
//         lottie: {},
//         video: {},
//       },
//     },
//     reviewsSummary: {},
//     displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//     restaurantOfferPresentationInfo: {},
//   },
//   analytics: {},
//   cta: {
//     link: "https://www.swiggy.com/restaurants/pizza-hut-lahoti-business-center-badepur-kalaburagi-447997",
//     type: "WEBLINK",
//   },
// };

// Data of all the res
const resObj = [
  {
    info: {
      id: "447997",
      name: "Pizza Hut",
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      locality: "Lahoti Business Center",
      areaName: "Badepur",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.1,
      parentId: "721",
      avgRatingString: "4.1",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 1.8,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-24 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/pizza-hut-lahoti-business-center-badepur-kalaburagi-447997",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "707055",
      name: "VFR Family Restaurant",
      cloudinaryImageId: "d941fada94442a601015494b8bd9793d",
      locality: "Rajapur",
      areaName: "Mominpura",
      costForTwo: "₹300 for two",
      cuisines: [
        "North Indian",
        "Indian",
        "Snacks",
        "Biryani",
        "Chinese",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.1,
      veg: true,
      parentId: "422797",
      avgRatingString: "4.1",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-23 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/vfr-family-restaurant-rajapur-mominpura-kalaburagi-707055",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "128179",
      name: "Subhan Hotel",
      cloudinaryImageId: "umfxek4usgtys07sr80g",
      locality: "Station Road",
      areaName: "Mominpura",
      costForTwo: "₹200 for two",
      cuisines: ["Desserts", "Chinese", "North Indian", "Biryani"],
      avgRating: 4,
      parentId: "196245",
      avgRatingString: "4.0",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 6,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "6.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-23 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/subhan-hotel-station-road-mominpura-kalaburagi-128179",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "602374",
      name: "Hotel Panchami",
      cloudinaryImageId: "wtzltbhp0ciswtmxlle2",
      locality: "Kuvempu Ngar",
      areaName: "Mominpura",
      costForTwo: "₹100 for two",
      cuisines: ["South Indian", "Snacks", "Sweets"],
      avgRating: 4.3,
      veg: true,
      parentId: "100943",
      avgRatingString: "4.3",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 4.5,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-23 21:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/hotel-panchami-kuvempu-ngar-mominpura-kalaburagi-602374",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "359417",
      name: "Domino's Pizza",
      cloudinaryImageId: "pplmhoyvig98uoooxvkj",
      locality: "Jaynagar",
      areaName: "Tilak Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.3,
      parentId: "2456",
      avgRatingString: "4.3",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 25,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-24 02:55:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/dominos-pizza-jaynagar-tilak-nagar-kalaburagi-359417",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "665876",
      name: "Kamat Hotel",
      cloudinaryImageId: "4d258181cd4bc8d42c7d9856bc325571",
      locality: "Kuvempu Ngar",
      areaName: "Mominpura",
      costForTwo: "₹200 for two",
      cuisines: ["South Indian"],
      avgRating: 4.1,
      veg: true,
      parentId: "114320",
      avgRatingString: "4.1",
      totalRatingsString: "50+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 3.6,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-23 21:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/kamat-hotel-kuvempu-ngar-mominpura-kalaburagi-665876",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "538951",
      name: "Welcome Family Restaurant",
      cloudinaryImageId: "x75tpj43njmuf04wjyec",
      locality: "Kuvempu Ngar",
      areaName: "Mominpura",
      costForTwo: "₹200 for two",
      cuisines: ["North Indian"],
      avgRating: 4.3,
      parentId: "225547",
      avgRatingString: "4.3",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 5.9,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "5.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-23 16:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/welcome-family-restaurant-kuvempu-ngar-mominpura-kalaburagi-538951",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "660668",
      name: "South Kitchen",
      cloudinaryImageId: "bf458a8258369a40528c489f3463a77d",
      locality: "Shanti Nagar",
      areaName: "Mominpura",
      costForTwo: "₹100 for two",
      cuisines: ["South Indian"],
      avgRating: 4.2,
      veg: true,
      parentId: "191456",
      avgRatingString: "4.2",
      totalRatingsString: "50+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 6,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "6.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-23 22:15:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/south-kitchen-shanti-nagar-mominpura-kalaburagi-660668",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "684965",
      name: "Grameen Kulfi",
      cloudinaryImageId: "9222019938518b7ebe87fa1c2ae382e4",
      locality: "VIDYA NAGAR",
      areaName: "SANJEVANI ROAD",
      costForTwo: "₹120 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.6,
      veg: true,
      parentId: "12175",
      avgRatingString: "4.6",
      totalRatingsString: "50+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 5.6,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "5.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-23 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/grameen-kulfi-vidya-nagar-sanjevani-road-kalaburagi-684965",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "172000",
      name: "Biggies Burger",
      cloudinaryImageId: "49d60c8b2a966219918f28a6ffe15d05",
      locality: "Kuvempu Nagar",
      areaName: "Mominpura",
      costForTwo: "₹300 for two",
      cuisines: ["American", "Fast Food", "Beverages"],
      avgRating: 4.2,
      parentId: "45723",
      avgRatingString: "4.2",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 4.6,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-23 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/biggies-burger-kuvempu-nagar-mominpura-kalaburagi-172000",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "235619",
      name: "KFC",
      cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
      locality: "Orchid Mall",
      areaName: "Mominpura",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      avgRating: 4.2,
      parentId: "547",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 4.5,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-23 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/kfc-orchid-mall-mominpura-kalaburagi-235619",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "512409",
      name: "Polar Bear",
      cloudinaryImageId: "57262fe3839f0bff174f3d7e7cc8a2b4",
      locality: "Sedam Road",
      areaName: "Mominpura",
      costForTwo: "₹350 for two",
      cuisines: ["Ice Cream"],
      avgRating: 4.5,
      veg: true,
      parentId: "726",
      avgRatingString: "4.5",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 17,
        lastMileTravel: 1.3,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "1.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-23 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/polar-bear-sedam-road-mominpura-kalaburagi-512409",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "684964",
      name: "NIC Ice Creams",
      cloudinaryImageId: "85825a6d74b1059a63a9b688de9f67ce",
      locality: "VIDYA NAGAR",
      areaName: "SANJEVANI ROAD",
      costForTwo: "₹120 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.6,
      veg: true,
      parentId: "6249",
      avgRatingString: "4.6",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 5.6,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "5.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-23 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/nic-ice-creams-vidya-nagar-sanjevani-road-kalaburagi-684964",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "471723",
      name: "Lassi Shop",
      cloudinaryImageId: "dtv0oivqh4s8jxbxrtz0",
      locality: "Sedam Road",
      areaName: "Mominpura",
      costForTwo: "₹200 for two",
      cuisines: ["Juices", "Ice Cream"],
      avgRating: 3.6,
      veg: true,
      parentId: "587",
      avgRatingString: "3.6",
      totalRatingsString: "50+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-23 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/lassi-shop-sedam-road-mominpura-kalaburagi-471723",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "290021",
      name: "Hotel Siddhipriya",
      cloudinaryImageId: "mc4v1m4hb0ont8ofiaxa",
      locality: "Sedam Road",
      areaName: "Laban",
      costForTwo: "₹300 for two",
      cuisines: [
        "Chinese",
        "North Indian",
        "South Indian",
        "Ice Cream",
        "Biryani",
      ],
      avgRating: 4.1,
      veg: true,
      parentId: "102446",
      avgRatingString: "4.1",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 1.8,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-23 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/hotel-siddhipriya-sedam-road-laban-kalaburagi-290021",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "366945",
      name: "Sri Laxmi Nivas Restuarant",
      cloudinaryImageId: "sgoev2p9jar88tuhhn7k",
      locality: "Kusnoor Road",
      areaName: "Mominpura",
      costForTwo: "₹200 for two",
      cuisines: ["Chinese", "North Indian", "Biryani"],
      avgRating: 4.1,
      veg: true,
      parentId: "194024",
      avgRatingString: "4.1",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 2.5,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-23 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/sri-laxmi-nivas-restuarant-kusnoor-road-mominpura-kalaburagi-366945",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "676464",
      name: "Cheezato Pizza",
      cloudinaryImageId: "62e2380a351b58a1fc53b17ae6685238",
      locality: "BTM Layout",
      areaName: "M.G. ROAD",
      costForTwo: "₹300 for two",
      cuisines: ["Pizzas", "Fast Food"],
      avgRating: 4.4,
      parentId: "283278",
      avgRatingString: "4.4",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 2,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-23 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/cheezato-pizza-btm-layout-m-g-road-kalaburagi-676464",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "194190",
      name: "Zaaeqah Al Arab Shawarma And Rolls",
      cloudinaryImageId: "msrmitf40aq3i1dxbdmo",
      locality: "Noor Bagh",
      areaName: "Mominpura",
      costForTwo: "₹200 for two",
      cuisines: ["Chinese", "South Indian", "Ice Cream"],
      avgRating: 3.7,
      parentId: "228985",
      avgRatingString: "3.7",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-23 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/zaaeqah-al-arab-shawarma-and-rolls-noor-bagh-mominpura-kalaburagi-194190",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "770869",
      name: "Paratha King",
      cloudinaryImageId: "af8349c33cc194911e3870097f79b0d5",
      locality: "S.R Kirana",
      areaName: "Rafiq chok",
      costForTwo: "₹200 for two",
      cuisines: ["North Indian", "Pizzas", "Punjabi"],
      avgRating: 3.8,
      parentId: "155397",
      avgRatingString: "3.8",
      totalRatingsString: "20+",
      sla: {
        deliveryTime: 37,
        lastMileTravel: 2.9,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "2.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-23 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹499",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/paratha-king-s-r-kirana-rafiq-chok-kalaburagi-770869",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "477880",
      name: "Uncle Chow",
      cloudinaryImageId: "iwfvshafuzedpjiewixo",
      locality: "Kuvempu Ngar",
      areaName: "Mominpura",
      costForTwo: "₹200 for two",
      cuisines: ["Chinese"],
      avgRating: 4.2,
      parentId: "219407",
      avgRatingString: "4.2",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 4.4,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-23 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/uncle-chow-kuvempu-ngar-mominpura-kalaburagi-477880",
      type: "WEBLINK",
    },
  },
];

// destructoring 2nd method
const RestaurantCard = (props) => {
  // const {resName,cusine}=props;

  const { resData } = props;
  const { cloudinaryImageId, cuisines, avgRating,name } = resData?.info;
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} starts</h4>
      <h4>{resData.info.sla.deliveryTime} min</h4>
      {/* <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.info.cloudinaryImageId
        }
      />
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>{resData.info.avgRating} starts</h4>
      <h4>{resData.info.sla.deliveryTime} min</h4> */}
    </div>
  );
};

// const Body = () => {
//   return (
//     <div className="body">
//       <div className="search">search</div>
//       <div className="res-container">
//         <RestaurantCard resData={resObj[0]} />
//         <RestaurantCard resData={resObj[1]} />
//         <RestaurantCard resData={resObj[2]} />
//         <RestaurantCard resData={resObj[3]} />
//         <RestaurantCard resData={resObj[4]} />
//         <RestaurantCard resData={resObj[5]} />
//         <RestaurantCard resData={resObj[6]} />
//         <RestaurantCard resData={resObj[7]} />
//         <RestaurantCard resData={resObj[8]} />
//         <RestaurantCard resData={resObj[9]} />
//         {/* <RestaurantCard resName="Meghana Foods" cusine="Biryani,North Indian, Asian"/>
//     <RestaurantCard resName="KFC" cusine="Burger, Fast Food"/> */}
//       </div>
//     </div>
//   );
// };

// looping the body
const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        {resObj.map((restaurant) => {
          return <RestaurantCard key={restaurant.info.id} resData={restaurant} />;
        })}
      </div>
    </div>
  );
};
 {/* // * or */}

        {/* // * We can also use index as the key to the JSX child elemnt - which is the 2nd parameter of the map() method, but is not a recommended practice - react official Docs declared this/}

        {resList.map((restaurant, index) => (
          <RestaurantCard key={index} resData={restaurant} />
        ))}

        {/* // * Why should we provide key property to the child elements - When creating a list in the UI from an array with JSX, you should add a key prop to each child and to any of its' children. React uses the key prop create a relationship between the component and the DOM element. The library uses this relationship to determine whether or not the component should be re-rendered.
         */}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
