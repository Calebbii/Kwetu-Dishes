import React, { useEffect } from 'react'
import Axios from "axios"
import { useState } from 'react';
import Category from './Category';
import '../style/home.css'

export default function Home() {


    const [query, setquery] = useState("")
    const [meals, setmenu] =  useState([])
  
    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`

  
    async function getMenu() {
      var result = await Axios.get(url);
      setmenu(result.data.meals);
      console.log(result.data.meals);
    }
   
    useEffect(() =>{
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log (data)
            setmenu(data.meals)
        })
    },[])
  
    const onSubmit = (e) => {
      e.preventDefault();
      getMenu();
    }
  
    return (
      <div className="App" >
        <h1 style={{ color : "blueviolet", fontSize: "2cm"}} >Qwetu Dishes</h1>
        <h2 style={{ color : "blueviolet"}} >What would you liked to be served to TODAY!!</h2>
        <form className='search' onSubmit={onSubmit}>
          <input
          type="text"
          placeholder='Enter Meal'
          value={query}
          onChange={(e) => setquery(e.target.value)}
          />
  
          <input type="submit" value="Search"/>
  
        </form>
        <div className='cat'>
          {meals.map(meals => {
            return <Category meals={meals}key={meals.idMeal}/>
          })}
        </div>
      </div>
    );
}
