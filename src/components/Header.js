 import { LOGO_URL } from "../utils/constants"
import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    //  let btnName = "Login";
    const [btnNameReact,setBtnNameReact ] = useState("Login");
    // console.log("Header render");

    const onlineStatus = useOnlineStatus(); 

    // If no dependenecy array => useEffect is called on every render
    //  if dependancy arrey is empty = [] => useEffect is called on initial render(just once)
    //  if dependency 
useEffect(() => {
    console.log("useEffect called");
 },[btnNameReact] );

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
            <div className="Logo-container">
                <img className="w-52" src= {LOGO_URL} />
            </div>
            <div className="flex items-center">
             <ul className="flex p-4 m-6">
                <li className="px-4">
                    Online Status: {onlineStatus ?  "\u2705":"\u274C"   }
                </li>
               <li className="px-4">
               <Link to="/">   Home </Link>
                </li> 
               <li className="px-4"> 
                <Link to="/about"> About us</Link>
                </li> 
             <li className="px-4">
             <Link to="/contact"> Contact Us </Link>
             </li>
             <li className="px-4">
             <Link to="/grocery"> Grocery </Link>
             </li>
               <li className="px-4"> <Link to="/cart">Cart </Link></li>
               < button className="login" onClick={() => { btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login"); 
             }}>
                {btnNameReact}
                </button> 
             </ul>
            </div>
        </div>
    );
};

export default Header;
 