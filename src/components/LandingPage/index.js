import React from 'react';
import Slideshow from '../Slideshow';
import "./style.css"
import shelterImage from "../../assets/misc/shelter.jpg"

function LandingPage() {
    return (
        <section>
            <div className='slide-show'>
                <Slideshow />
                <h1>Wildlife Rehab, Rescue, and Education.</h1>
            </div>
            <div className='main-text flex'>
                <div>
                <img className="shelter-img" src={shelterImage} alt="welcoming sign at the shelter" />
                </div>
                <div>
                <p> 
                The Coulee Region Humane Wildlife Rehabilitation program is run by animal control supervisor Kathy KasaKaitas. Animal control often receives calls regarding injured wildlife throughout the county. Aside from that, people from all over Wisconsin have transported injured wildlife to our facility to be rehabbed by us. Our goal is to rehab and humanely treat the wildlife that comes through our door. Each year we take in over 1,000 animals from the smallest of baby bunnies to red tailed hawks.                
                </p>
                <h2>We Can't Do It Without You</h2>
                <p>
                Coulee Region Humane Society’s Wildlife Rehabilitation program is largely funded by donations from local supporters. Please consider donating to help care for these wildlife animals.
                </p>
                </div>
                
            </div> 
            <hr></hr>   
        </section>
        
    )
}

export default LandingPage;