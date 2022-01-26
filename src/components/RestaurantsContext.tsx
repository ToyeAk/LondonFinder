import { element } from "prop-types";
import react, { useEffect, useState } from "react";
import restaurantsArray from "../restaurants.json";
import attractionArray from "../attractions.json"
import activitesArray from "../activities.json"
import Nav from "./nav";
import Slide from "./Slider"
import { render } from "react-dom";


export function RestaurantsContent(): JSX.Element {




  interface Restaurantsprops {
    id: string;
    url: string;
    name: string;
    image: string;
    price: number;
    location: string;
    rating: number;
  }
  
  interface Attractionsprops {
    id: string;
    url: string;
    name: string;
    image: string;
    price: number;
    location: string;
    rating: number;
  }

const [restaurant,setRestaurant] = useState<Restaurantsprops>()
const [attraction,setAttraction]= useState<Attractionsprops>()
const [activities,setActivities]= useState<Attractionsprops>()
const [render,setRender]=useState(1)


const budget = localStorage.getItem("Budget")
const budgetNum = budget?  parseInt(budget): null 

const filteredResturants = budgetNum && restaurantsArray.filter((restaurant)=> {if (restaurant.price > budgetNum * 0.01)
  
  return (restaurant)})

 const filteredAttraction = budgetNum && attractionArray.filter((attraction)=> {if (attraction.price > budgetNum * 0.001)
  return (attraction)})

const filteredActivities = budgetNum && activitesArray.filter((activities)=> {if (activities.price > budgetNum * 0.01)
    return (activities)})

  function getRandomRestaurant(filteredResturants : any) {
    const randomNumber = Math.floor(Math.random() * filteredResturants.length);
    const result = filteredResturants[randomNumber]
 setRestaurant(result)
  }

  function getRandomAttraction(filteredAttraction : any) {
    const randomNumber = Math.floor(Math.random() * filteredAttraction.length);
    const resultA = filteredAttraction[randomNumber]
 setAttraction(resultA)
  }

  function getRandomActivity(filteredActivities : any) {
    const randomNumber = Math.floor(Math.random() * filteredActivities.length);
    const resultAct = filteredActivities[randomNumber]
 setActivities(resultAct)
  }

  const handleTest = () => {
    setRender(render + 1)

  }

  
  useEffect(() => {
   
    getRandomRestaurant(filteredResturants)
    getRandomAttraction(filteredAttraction)
    getRandomActivity(filteredActivities)
    console.log(budgetNum)
    console.log(render)
  },[budgetNum]);

  return (

    <div>

<header className="header">
      <div id="logo" className="logo">
        
          <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"></img>
      
      
      </div>

      <Nav/>
     
    </header>
    <div className="container">

  
<Slide/>
<div className="card bg-dark text-white" style={{width:700}}>
{activities && <div key={activities.id} >
  <img className="card-img" src={activities.image}/>
  <div className="card-img-overlay">
    <h5 className="card-title" >{activities.name}</h5>
    <p className="card-text">{activities.location}</p>
    <a href={activities.url} className="btn btn-primary">Visit Website</a>
  </div>
</div>}

</div>


      <div className="card bg-dark text-white"  style={{width:300 , height:200}}>
      {restaurant && <div key={restaurant.id} >
  <img className="card-img" src={restaurant.image}/>
  <div className="card-img-overlay">
    <h5 className="card-title" >{restaurant.name}</h5>
    <p className="card-text">{restaurant.location}</p>
    <a href={restaurant.url} className="btn btn-primary">Visit Website</a>
  </div>
</div>}
</div>
<div> 
{attraction && <div key={attraction.id} className="card" style={{width:500, height: 50}} >
  <img className="card-img-top" src={attraction.image}/>
  <div className="card-body">
    <h5 className="card-title" >{attraction.name}</h5>
    <p className="card-text">{attraction.location}</p>
    <a href={attraction.url} className="btn btn-primary">Visit Website</a>
  </div>
</div>}
</div>


        
        
</div>
<p>{render}</p>
<button className="btn btn-primary" onClick={handleTest}>ClickMe</button>

</div>
  );

  
}




