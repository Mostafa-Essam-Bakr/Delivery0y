
import "../home.css"







import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link,NavLink } from "react-router-dom";




import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'








import Example from "../Lunchparent/Lunch"






export default function Nav(){
    return(
                   <div><nav className="navp r">
            <Example/>

                <div className="logo">
                <FontAwesomeIcon icon={faPizzaSlice} style={{color:"#ffe200",fontSize:'xxx-large'}}/>
                <h3 style={{color:"black"}}>
                    Rocket <span style={{color:"#ffe200"}}>Order</span>
                </h3>
                </div>
                <div>
                    <ul className="ulp">
                    <li><Link to="/">Home</Link></li>

                        <li>About US</li>
                        <li><Link to="Restrant">Restrants</Link></li>
                        <li>Pages</li>
                        <li>
Contacts</li>


                    </ul>
                    </div>

                    <div className="bageatshop">
                    <FontAwesomeIcon icon={faBagShopping} className="bagshop" />    
                       
                              <Link to="/Ordersgin" >
                              <button className="eatnow">Order Now

                              </button>
                                                          {" "}
        </Link>

                       
                   
                    </div>


            </nav></div>)}
