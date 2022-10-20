import React from "react";
import { NavLink } from "react-router-dom";
import './Menu.css';


//1. ճիշտ ձևնա գրելու Menu
export default function Menu() {
    const menuName=[
        {
            id:1,
            to:"/Home" ,
            name: 'Home'
        },
        {
            id:2,
            to:"/About" ,
            name: 'About'
        },
        {
            id:3,
            to:"/Contact" ,
            name: 'Contact'
        },
        {
            id:4,
            to:"/Comedy" ,
            name: 'Comedy'
        },
        {
            id:5,
            to:"/Register" ,
            name: 'Register'
        }
    ]
    return (
        <div id='nav'>
            <ul id="ul">
                {menuName.map((element)=>(
                    <NavLink key={element.id} to={element.to} className={({isActive})=>(isActive ? "Li1" : "Li2")}>
                        <li>{element.name}</li>
                        </NavLink>
 ))}
               
            </ul>
        </div>
    )
};


//2. մյուս ձևնա գրելու Menu
// export default function Menu() {
    
//     return (
//         <div id='nav'>
//             <ul id="ul">                
//                 <NavLink to="/Home" className={({ isActive }) => isActive ? "Li1" : "Li2"}><li>Home</li></NavLink>
//                 <NavLink to="/About" className={({ isActive }) => (isActive ? "Li1" : "Li2")}><li>About</li></NavLink>
//                 <NavLink to="/Contact" className={({ isActive }) => (isActive ? "Li1" : "Li2")}><li>Contact</li></NavLink>
//                 <NavLink to="/Comedy" className={({ isActive }) => (isActive ? "Li1" : "Li2")}><li>Comedy</li></NavLink>
//                 <NavLink to="/Register" className={({ isActive }) => (isActive ? "Li1" : "Li2")}><li>Register</li></NavLink>
//             </ul>
//         </div>
//     )
// };