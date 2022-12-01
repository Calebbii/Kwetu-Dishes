import React from 'react'
import '../style/landing.css'

function LandingPage() {
  return (
    <div id='main'>
        <div className='landing'>
            <img src='https://media.istockphoto.com/id/1295633127/photo/grilled-chicken-meat-and-fresh-vegetable-salad-of-tomato-avocado-lettuce-and-spinach-healthy.jpg?s=612x612&w=0&k=20&c=Qa3tiqUCO4VpVMQDXLXG47znCmHr_ZIdoynViJ8kW0E='/>
        </div>
        <div className='title'>
        <h1 style={{ color : "blueviolet", fontSize: "3cm"}} >Qwetu Dishes</h1>
        <h3 style={{ color : "blueviolet", fontSize: "1.5cm"}} >Order Healthy And Fresh Food Anytime</h3>
        <h5 style={{ color : "blueviolet", fontSize: "1cm"}}>And get your food delivered at an affordable price within minutes</h5>
        </div>
    </div>
  )
}

export default LandingPage