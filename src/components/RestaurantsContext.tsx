import { element } from "prop-types";
import react, { useEffect, useState } from "react";
import restaurantsArray from "../restaurants.json";
import attractionArray from "../attractions.json"
import activitiesArray from "../activities.json"
import Nav from "./nav";
import Slide from "./Slider"
import { render } from "react-dom";
import { count } from "console";
import marketsArray from "../markets.json"

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
  
  interface Marketsprops {
    id: string;
    url: string;
    name: string;
    image: string;
    price: number;
    location: string;
    rating: number;
    Description:string
  }
  interface Attractionsprops  {
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
const [markets,setMarkets]= useState<Marketsprops>()

const [render,setRender]=useState(1)
const [test,setTest]=useState(0)
const [ total, setTotal] = useState(0)


const budget = localStorage.getItem("Budget")
const budgetNum = budget?  parseInt(budget): null 

const filteredResturants = budgetNum && restaurantsArray.filter((restaurant)=> {if (restaurant.price > budgetNum * 0.3 && restaurant.price < budgetNum * 0.5)
  
  return (restaurant)})

 const filteredAttraction = budgetNum && attractionArray.filter((attraction)=> {if (attraction.price > budgetNum * 0.2)
  return (attraction)})

const filteredActivities = budgetNum && activitiesArray.filter((activities)=> {if (activities.price > budgetNum * 0.2)
    return (activities)})



  function getRandomRestaurant(filteredResturants : any) {
    const randomNumber = Math.floor(Math.random() * filteredResturants.length);
    const result = filteredResturants[randomNumber]
 setRestaurant(result)
  }

  function getRandomMarket(marketsArray : any) {
    const randomNumber = Math.floor(Math.random() * marketsArray.length);
    const resultM = marketsArray[randomNumber]
 setMarkets(resultM)
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

  const handleClick = () => {

    setRender(render + 1)

  }


  
  


  useEffect(() => {
   
    getRandomRestaurant(filteredResturants)
    getRandomAttraction(filteredAttraction)
    getRandomActivity(filteredActivities)
    getRandomMarket(marketsArray)
    console.log(totalPrice)
    console.log(attraction?.price)
    console.log(activities?.price)
    totalPrice !== undefined &&
    setTotal(totalPrice && totalPrice)

  },[render]);



  
  const handleHome = () => {
    window.location.href='http://localhost:3000'
  };


  const totalPrice= ( attraction && activities && restaurant) && (attraction?.price + activities?.price + restaurant?.price) 


  return (

    <div className="background">

<header className="header">
      <div id="logo" className="logo">
        
          <img className="logo" onClick={handleHome} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"></img>
      
      
      </div>

      <Nav/>
     
    </header>

<div className="sidenav">
  

<Slide/>


<button className="button2" onClick={handleClick} ><h1 className="buttonText2">Make Your Pick</h1></button>
<div className="total">£{total} Total Price</div>

</div>


<div className="container">

  <div className="row">
    <div className="col-md-6"> 
<div className="card bg-dark text-white" >
{activities && <div key={activities.id} >
  <div className="hover">
  <img className="card-img" src={activities.image}/>
  </div>
  <div className="card-img-overlay">
    <div className="ratings-title">
    <div className="card-title" >{activities.name}</div>
    <div className="rating" >⭐{activities.rating}</div>

    </div>
    <p className="card-location">{activities.location}</p>


    <a href={activities.url} className="btn btn-primary">Visit Website</a>
  </div>
</div>}
</div>
</div>
<div className="col-md-6">
      <div className="card bg-dark text-white" >
      {restaurant && <div key={restaurant.id} >
  <img className="card-img" src={restaurant.image}/>
  <div className="card-img-overlay">
  <div className="ratings-title">
    <div className="card-title" >{restaurant.name}</div>
    <div className="rating" >⭐{restaurant.rating}</div>


    </div>
    <p className="card-location">{restaurant.location}</p>

    <a href={restaurant.url} className="btn btn-primary">Visit Website</a>
  </div>
</div>}
</div>
</div>

<div className="w-100 d-none d-md-block"></div>
<div className="col-md-6" >
      <div className="card bg-dark text-white" >
      {markets && <div key={markets.id} >
  <img className="card-img" src={markets.image}/>
  <div className="card-img-overlay">
  <div className="ratings-title">
    <div className="card-title" >{markets.name}</div>
    <div className="rating" >⭐{markets.rating}</div>

    </div>    <p className="card-location">{markets.location}</p>

    <a href={markets.url} className="btn btn-primary">Visit Website</a>
  </div>
</div>}
</div>
</div>
<div className="col-md-6">
      <div className="card bg-dark text-white" >
      {attraction && <div key={attraction.id} >
  <img className="card-img" src={attraction.image}/>
  <div className="card-img-overlay">
  <div className="ratings-title">
    <div className="card-title" >{attraction.name}</div>
    <div className="rating" >⭐{attraction.rating}</div>

    </div>    <p className="card-location">{attraction.location}</p>

    <a href={attraction.url} className="btn btn-primary">Visit Website</a>
  </div>
</div>}
</div>
</div>




        
        
</div>
</div>
</div>
  );

  
}




