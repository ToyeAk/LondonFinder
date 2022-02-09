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
    window.location.href='http://localhost:3000/picks'
    
  
  };
  
  const handleHome = () => {
    window.location.href='http://localhost:3000'
  };



  return (
   

    <body className="LandingPage">

<header className="header">
      <div id="logo" className="logo">
        
          <img className="logo" onClick={handleHome} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"></img>
      
      
      </div>

      <Nav/>
     
    </header>
      <h2 className="landingTitle">SET YOUR BUGET</h2>
      <p className="landingSubText">Let the button decide</p>
<h1 className="perPerson">${range} per person</h1>
<div className="Slider">
<Slider className="Slider"
style={{ width:250 , height:40}}
minimumValue={50}
maximumValue={300}
minimumTrackTintColor="#FF5A5F"
maximumTrackTintColor="#FFFFFF"
thumbTintColor='#FF5A5F'
value={.5}
onValueChange={(value) => setRange(value)}
onSlidingStart={()=> setSliding('Sliding')}
onSlidingStop={()=> setSliding('Inactive')}

/>

</div>




<button className="button" onClick={handleClick} ><h1 className="buttonText">Make Your Pick</h1></button>

   </body>

  );
}



