import "../home.css"



import imgcon from "../Assets/sl10.jpg"



import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";




import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'




import Aos from "aos"
import { useEffect } from "react";



import Example from "../Lunchparent/Lunch"








import { useState } from "react";
import img36 from "../Assets/logc.jpg";
import Form from "react-bootstrap/Form";

import Spinner from "react-bootstrap/Spinner";

export default function Ordersgin() {
    useEffect(()=>{
        Aos.init({duration:500,easing:"linear"})
            },[])
  const [cong, Setcong] = useState(true);

  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [Date, SetData] = useState("");
  const [Meal, SetCity] = useState("");

  const [accept, SetAccept] = useState(false);
  const [EmailErr, SetEmailerr] = useState("");

  async function Submit(e) {
    let flag = true;
    e.preventDefault();
    SetAccept(true);
    if (name === "" || Date === "") {
      flag = false;
    } else if ((flag = true)) {
      Setcong(false);
    }
  }

  return (
    <div className="psgin">
        <nav className="navp r">
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
                        <li><Link to="/Restrant">Restrants</Link></li>
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


            </nav>
      <div>
        <img className="cover-log" src={img36} alt="im" />
      </div>
      <div
        className="congra"
        style={{ display: `${cong === false ? "flex" : "none"}` }}
      >
        <h1>Congratulations {name}</h1>

        <h2>the {Meal} Meal has been booked successfully</h2>
        <h2>We wish you a happy Meal on {Date}</h2>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {" "}
          <i
            style={{ color: " #06ff06", fontSize: "xxx-large" }}
            className="fa-solid fa-house-circle-check"
          ></i>
          <>
            <Spinner animation="border" size="sm" />
            <Spinner animation="border" />
            <Spinner animation="grow" size="sm" />
            <Spinner animation="grow" />
          </>
        </div>          <img src={imgcon} alt=" xaa"/>

      </div>
      <div
        className="pfrm1"data-aos="zoom-in-up"
        style={{ display: `${cong === false ? "none" : "flex"}` }}
      >
        <form className="frm1" onSubmit={Submit}>
          <label htmlFor="name"> Name </label>
          <input
            type="text"
            name="LastName"
            placeholder="Name"
            id="name"
            value={name}
            onChange={(e) => SetName(e.target.value)}
          />
          {name === "" && accept && (
            <p className="error">name is more than 3 char</p>
          )}

          <label htmlFor="email"> Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            id="email"
            value={email}
            required
            onChange={(e) => SetEmail(e.target.value)}
          />
          {accept && EmailErr === 422 && <p>email is allready taken</p>}

          <h4 style={{ color: "white", fontFamily: "fantasy" }}>
            Book in a country
          </h4>
          <Form.Select
            aria-label="Default select example"
            value={Meal}
            onChange={(e) => SetCity(e.target.value)}
           className="eatslect" >
            <option>Foods</option>
            <option value="Pizza">Pizza</option>
            <option value="Burger">Burger</option>
            <option value="Chiken">Chiken </option>
            <option value="Meat">Meat</option>
            <option value="Fish">Fish</option>
            <option value="Beans">Beans</option>
            <option value="French frize">French frize</option>
            <option value="Kfc">Kfc</option>
            <option value="Mac">Mac</option>
            <option value="Baba Jouns">Baba Jouns</option>
            <option value="Pepse">Pepse</option>
          </Form.Select>

          <label htmlFor="Date"> Book Date</label>
          <input
            type="Date"
            name="Date"
            placeholder="Date"
            id="Date"
            value={Date}
            required
            onChange={(e) => SetData(e.target.value)}
          />
          {Date === "" && accept && <p>Date is Emptey</p>}

          <button type="submit">Book</button>
        </form>
      </div>{" "}
    </div>
  );
}

/*import { useState } from "react";
import axios from "axios";

export default function SignUp (){


    const [name,SetName]=useState('')
    const [email,SetEmail]=useState('')
    const [password,SetPssword]=useState('')
    const [reppassword,SetReppassword]=useState('')
    const [accept,SetAccept]=useState(false)

   const [erremail,SetErremail]=useState("")

    async function Submit(e){
        let flag =true
        e.preventDefault();
        SetAccept(true)
        if (name === '' || password.length<=8 || reppassword !== password){
            flag=false
        }else flag=true;


  
try{
        if (flag){
         let res = await axios.post("http://127.0.0.1:8000/api/register",{
            name:name ,
            email: email,
            password: password,
            password_confirmtion:reppassword,
         });
         if (res.status === 204){
            window.localStorage.setItem("emaul",email)
            window.location.pathname = "/" ;
         }


        }} 
        catch (err){
            SetErremail(err.response.status );
        }
    }

    
    return (<div className="pfrm1">
        <form className="frm1" onSubmit={Submit}>

            <label htmlFor="name"> LastName </label>
            <input type="text" name="LastName" placeholder="LastName" id="name" value={name} 
                        onChange={(e) => SetName(e.target.value)}
            />
            {name === '' && accept &&  <p className="error">name is more than 3 char</p>}

            <label htmlFor="email"> Email</label>
            <input type="email" name="email" placeholder="Email" id="email"  value={email} required
                        onChange={(e) => SetEmail(e.target.value)}

            />

            {accept && erremail === 422 && <p>Email is been taken</p>}

            <label htmlFor="password">  Pass word</label>
            <input type="password" name="password" placeholder="Pass word" id="password" value={password}
                        onChange={(e) => SetPssword(e.target.value)}

            />
            {password.length<=8 &&accept && <p className="error">password motr than 8 char</p>}

            <label htmlFor="reppassword"> Repeat Pass word</label>
            <input type="password" name="password" placeholder="Repeat Pass word" id="reppassword" value={reppassword}
                        onChange={(e) => SetReppassword(e.target.value)}

            />
             {reppassword !== password && accept&& <p className="error">must similar password</p>}           

            <button type="submit">submit</button>
        </form>
    </div>)
} */
