import "./home.css"


import Carousel from 'react-bootstrap/Carousel';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons'
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'

import Aos from "aos"
import "aos/dist/aos.css"
import res1 from"./Assets/res1.jpeg"
import res2 from"./Assets/res2.jpeg"
import res3 from"./Assets/res3.jpeg"
import res4 from"./Assets/res4.jpeg"
import res5 from"./Assets/res5.jpeg"
import res6 from"./Assets/sl10.jpg"

import Nav from "./Componats/Nav"


import { useEffect } from "react"

export default function Restrant(){
    useEffect(()=>{
Aos.init({duration:500,easing:"linear"})
    },[])


    return(<div className="bdyres">

<Nav/>

       

          <Carousel className='slidimg'>
<Carousel.Item interval={3000}>
      < img src={res4} alt='efw' style={{width:"100%" , height:"400px"}}/>
        <Carousel.Caption>
          <h3>Relaxing hotel</h3>
          <p>Enjoy the Red Sea and the stunning views</p>
        </Carousel.Caption>
      </Carousel.Item>  

      <Carousel.Item interval={3000}>
        < img src={res1} alt='efw' style={{width:"100%" , height:"400px"}}/>
        <Carousel.Caption>
          <h3>Egyptian pharaonic hotel</h3>
          <p>A struggle with the Pharaonic civilizations and ancient Egypt</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
      < img src={res2} alt='efw' style={{width:"100%" , height:"400px"}}/>
        <Carousel.Caption>
          <h3>Ancient pyramids</h3>
          <p>
          Make trips and book about the Pharaonic pyramidsl
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  












          <div className=" discoverrom">
   
    <div><img src={res3} alt="im" data-aos="zoom-in"/> <h4>Standard Restrant</h4><h5>Average size: 270 sqm / 290 sqft</h5> </div>
    <div><img src={res2} alt="im" data-aos="zoom-in"/> <h4> Deluxe Restrant</h4> <h5>Average size: 300 sqm / 390 sqft</h5></div>
    <div><img src={res5} alt="im" data-aos="zoom-in"/> <h4>Superior Restrant</h4><h5>Average size: 400 sqm / 490 sqft</h5> </div>

    
</div>
         

          <div className="parentcontener">

      <div className="contener">
<div className="box">

  <div className="face front">
  <img src={res1}alt="im"/>

  </div>


  <div className="face back">
  <img src={res2}alt="im"/>

  </div>

</div>
      </div>




      <div className="contener">
<div className="box">

  <div className="face front">
  <img src={res3}alt="im" />

  </div>


  <div className="face back">
  <img src={res4}alt="im"/>

  </div>

</div>
      </div>





      <div className="contener">
<div className="box">

  <div className="face front">
  <img src={res5}alt="im"/>

  </div>


  <div className="face back">
  <img src={res6}alt="im"/>

  </div>

</div>
      </div>

      </div>

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


    </div>)
}