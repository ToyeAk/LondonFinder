import react, { useState } from "react";
import { useEffect } from "react";
import Slider from "@react-native-community/slider"
import Nav
 from "../components/nav";
 import { useNavigate } from "react-router-dom";
 import App from "../App";
 import PropTypes from 'prop-types';
import { Interface } from "readline";

// interface LandingPageProps{
//   range :string
//   setRange : (input:string) => void
// }



export default function LandingPage()  {


  
  const history = useNavigate();
  const [range,setRange]=useState(100)

  const [sliding, setSliding]=useState('Inactive')



  const handleClick = () => {
    localStorage.setItem("Budget", range);
    
  
  };
  



const baseURL = "http://localhost:3000/"


  return (
   

    <body className="LandingPage">

<header className="header">
      <div id="logo" className="logo">
        
          <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"></img>
      
      
      </div>

      <Nav/>
     
    </header>
      <h2 className="landingTitle">SET YOUR BUGET</h2>
      <p className="landingSubText">Let the button decide</p>
<h1 className="budget">${range} per person</h1>
<div className="Slider">
<Slider className="Slider"
style={{ width:250 , height:40}}
minimumValue={100}
maximumValue={1000}
minimumTrackTintColor="#000000"
maximumTrackTintColor="#FFFFFF"
thumbTintColor='#000'
value={.5}
onValueChange={(value) => setRange(value)}
onSlidingStart={()=> setSliding('Sliding')}
onSlidingStop={()=> setSliding('Inactive')}

/>

</div>



<img src="../images/button.png
"/>



<button className="btn btn-primary" onClick={handleClick} >Make Your Pick</button>

   </body>

  );
}

// onClick={event =>  window.location.href='http://localhost:3000/picks'}


