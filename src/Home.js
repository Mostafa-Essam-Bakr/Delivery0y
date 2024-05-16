import "./home.css"

import cover from"./Assets/cover.jpg"
import up1 from"./Assets/photo-3.png"
import pro1 from"./Assets/1pro.jpg"
import pro2 from"./Assets/pro2.jpg"
import pro3 from"./Assets/pro3.jpg"
import pro4 from"./Assets/pro4.jpg"
import pro5 from"./Assets/pro5.jpg"
import photo4 from"./Assets/photo-4.png"
import dis from"./Assets/cover.jpg22222.jpg"
import sub from"./Assets/blog-1.png"
import ill from"./Assets/illustration-4.png"




import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";




import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'






import IndividualIntervalsExample from "./Sliderbig"
import Example from "./Lunchparent/Lunch"
import Range from "./Componats/Range"
import AutoPlay from "./Componats/Slick1"
import Restaurantsdrop from "./Componats/Droplist2"
import Aos from "aos"

import { useEffect } from "react"

export default function Home(){
    useEffect(()=>{
Aos.init({duration:500,easing:"linear"})
    },[])
    return(
        <div className="body">
           <nav className="navp" style={{    backgroundColor: "#ff522c"
}}>
            <Example/>

                <div className="logo">
                <FontAwesomeIcon icon={faPizzaSlice} style={{color:"#ffe200",fontSize:'xxx-large'}}/>
                <h3 style={{color:"black"}}>
                    Rocket <span style={{color:"#ffe200"}}>Order</span>
                </h3>
                </div>
                <div>
                    <ul className="ulp">
                    <li>
        Home
     </li>
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
                              <button className="eatnow">Order

                              </button>
                                                          
        </Link>

                       
                   
                    </div>


            </nav>
            <div>
                 <img src={cover} alt="c" className="cover"/>
            <img src={up1} alt="c" className="up1"  data-aos="zoom-in"/>
            
            <h1 className="h1" data-aos="zoom-in-left">The Best Restaurants<br/> In Your Home</h1>
            
            </div>
           

<div className="sction"> 
                    <div className="slider1">
                        <IndividualIntervalsExample />
                        <img src={photo4} alt="c" className="person1" data-aos="zoom-out-right"/>
                        
                        <h1 className="hperson1" data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">What customers<br/> say about us</h1>


                </div>
                
                
                <div className="chek" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000">
                    <h2 className="h2chek">Your Balance</h2>
                    <div className="bgbalance">
                        <h4  className="h4chek">Balance</h4>
                        <h1  className="h1chek">$5000</h1>
                    </div>



                 <div className="pros">
                    < Range /> 
                     <img src={pro1} alt="c" className="pro1"/>
                    </div> 
                    <div className="pros">
                    < Range /> 
                     <img src={pro2} alt="c" className="pro1"/>
                    </div> 
                    <div className="pros">
                    < Range /> 
                     <img src={pro3} alt="c" className="pro1"/>
                    </div> 
                    <div className="pros">
                    < Range /> 
                     <img src={pro4} alt="c" className="pro1"/>
                    </div> 
                    <div className="pros">
                    < Range /> 
                     <img src={pro5} alt="c" className="pro1"/>
                    </div> 

                  <hr className="hr"/>     

                  <button className="chekout"> Check out</button>       
                  <hr className="hr"/>   
                  <h3 style={{color:"orange",textAlign:"center"}}>Serveces</h3>  
                  <button className="total">Total</button>
                </div>


</div>

< AutoPlay />
<Restaurantsdrop/>
<div className="dis">
<img src={dis} alt="c" className="person1"  data-aos="fade-down-right"/>
<h1 data-aos="fade-left" style={{color:"white"}}>Get Discount VoucherUp To 20%
Lorem ipsum dolor sit amet, consectetur adipi <br/><button className="eatnow">Discount</button></h1>
</div>

<div className="subscrib">
<h1 data-aos="fade-left" style={{color:"white"}}>Get the menu of your favorite restaurants every day<br/>
<button className="eatnow">Subscrib</button>
</h1>
<img src={sub} alt="c" className=""  data-aos="fade-down-right"/>

</div>
<div className="pconect"><div className="conect">
<img src={ill} alt="c" className=""  data-aos="zoom-in-up"/>

<h1 data-aos="fade-left" style={{color:"white"}}>Why You Should Optimize Your Menu for Delivery
<br/>
<button className="eatnow">Subscrib</button>
</h1>
    
</div></div>


<div className="Footer">  <div><div className="logo">
                <FontAwesomeIcon icon={faPizzaSlice} style={{color:"#ffe200",fontSize:'xxx-large'}}/>
                <h3 style={{color:"white    "}}>
                    Rocket <span style={{color:"#ffe200"}}>Order</span>
                </h3>
                </div><h1 style={{color:"white"}}>The Best Restaurants in Your Home</h1>
                <div>
                    <h4 style={{color:"white"}}>  Vitae congue mauris rhoncus aenean.<br/>
                 Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere.<br/>
                  Tempus egestas sed sed risus pretium quam.<br/></h4>
</div>
</div>

<div>
<ul className="ulp fot">
                        <li>Home</li>
                        <li>About US</li>
                        <li>Restrants</li>
                        <li>Pages</li>
                        <li>Contacts</li>


                    </ul>
</div>



<div style={{color:"white"}}>
<h1 style={{color:"white"}}>CONTACTS</h1>

<FontAwesomeIcon icon={faLocationDot} />  1717 Harrison St, San Francisco, CA 94103, United States<br/>

<FontAwesomeIcon icon={faEnvelope} />   quickeat@mail.net<br/>
<FontAwesomeIcon icon={faPhone} />      +1 425 326 16 27
</div>
                  
              
</div>




        </div>
    )
}
