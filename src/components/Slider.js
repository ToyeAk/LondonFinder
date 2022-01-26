
import Slider from "@react-native-community/slider"
import { useState } from "react"


const Slide = () => {

    const [range,setRange]=useState(100)
const [sliding, setSliding]=useState('Inactive')


const handleClick = () => {
    localStorage.setItem("Budget", range);
      };

    return (
      <div >
          <h2 className="landingTitle">Click again for a new trip</h2>
      <p className="landingSubText">Let the button decide</p>
<h1 className="budget">${range} per person</h1>
<div className="Slider"></div>
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

<button className="btn btn-primary" onClick={handleClick} >Make Your Pick</button>

      </div>
    )
  }
  
  export default Slide