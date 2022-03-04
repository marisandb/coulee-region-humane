import React from 'react';
import Slideshow from '../Slideshow';
import "./style.css"
import shelterImage from "../../assets/misc/shelter.jpg"
import vanLoon from "../../assets/misc/van-loon.jpg"

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
                </div>     
            </div>
            <div className='facebook'>
                <h2>Follow Us on Facebook</h2>
                <p>We update our Facebook page regularly with stories and infromation about the wildlife that we rehab.</p>
            <iframe title="fb" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FCRHSWildlife%2Fposts%2F1811139872404547&show_text=true&width=500" width="500" height="506" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            </div>
            <div className='bottom flex'>
                <div>
                <h2>We Can't Do It Without You</h2>
                <p className='padding'> 
                Coulee Region Humane Society’s Wildlife Rehabilitation program is largely funded by donations from local supporters. Please consider donating to help care for these wildlife animals.
                </p>
                <a class="donate-btn2" target="_blank" rel="noreferrer" href="https://donatenow.networkforgood.org/crhswildlife">Donate & Help Local Wildlife</a>                </div>
                <div>
                <h2>Thank You to Our Supporters</h2>
                <p>A big thank you to ALL of our Wildlife Program supporters. Especially to  
                    <a href="https://vanloonanimalhospital.com" target="_blank" rel="noreferrer"> VAN LOON ANIMAL HOSPITAL</a>
                    in Holmen, WI for supporting our Wildlife Program!
                </p>
                <img className="van-loon" src={vanLoon} alt=""/>
                </div>
            </div>
            <hr></hr>   
        </section>
        
    )
}

export default LandingPage;