import React from 'react';
import Slideshow from '../Slideshow';
import "./style.css"


function LandingPage() {
    return (
        <section>
            <div className='slide-show'>
                <Slideshow />
            </div>
        </section>
    )
}

export default LandingPage;