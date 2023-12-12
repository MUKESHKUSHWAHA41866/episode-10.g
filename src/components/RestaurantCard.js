
import { CDN_URL } from "../utils/constants";



const RestaurantCard = (props) => {
    const { resData } = props;
    
     const {
        cloudinaryImageId, name,
        avgRating, cuisines,
        costForTwo, DeliveryTime
     } = resData?.info;

   return (
       <div className="m-3 p-3 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200" style={{
          /**   backgroundColor: "#f0f0f0"*/ }}>

        <img className="rounded-lg"  alt="res-logo" src= { CDN_URL +
          resData.info.cloudinaryImageId  } />

       <h3 className="font-bold py-4 text-lg"> {name}</h3>
        <h4>{cuisines.join (" ,")} </h4> 
       <h4>{avgRating} Stars</h4>
       <h4>{costForTwo } For Two</h4>
       <h4>{DeliveryTime} minutes</h4>
       </div>
   );
};

export default RestaurantCard;