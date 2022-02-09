
import Slider from "@react-native-community/slider"
import { useState } from "react"


const Slide = () => {

    const [range,setRange]=useState(100)
const [sliding, setSliding]=useState('Inactive')


// const handleClick = () => {
//     localStorage.setItem("Budget", range);
//       };

    return (
      <div >
          <h2 className="landingTitle2">CLICK AGAIN FOR A NEW PICK</h2>
      <p className="landingSubText2">Let the button decide</p>
<h1 className="perPerson2">${range} per person</h1>
<div className="Slider2">
<Slider 
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

      </div>
    )
  }
  
  export default Slide