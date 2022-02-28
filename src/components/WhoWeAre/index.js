import React from 'react';
import "./style.css"

// import images
import Kathy from '../../assets/staff/Kathy.jpg';
import Katy from '../../assets/staff/Katy.jpg';
import Casey from '../../assets/staff/Casey.jpg';


function WhoWeAre() {
    return (
        <section>
            <div className='container'>
                <div className='title'>
                    <h1>Meet Our Certified Humane Officers</h1>
                    <p>
                        Blurb about certification and training
                    </p>
                </div>
            <div className='left flex'>
                <img className="officerimg" src={Kathy} alt="Kathy holding three baby owls" />
                <div className='officer-info'>
                <h2>Kathy KasaKaitas - Supervisor</h2>
                <p>
                Lorem ipsum dolor sit amet. 33 voluptatem deserunt ut dolorem maxime et sunt ducimus rem ullam voluptate. Rem omnis aspernatur ab possimus deserunt in nulla nemo in soluta voluptas nam similique sint.
                </p>
                </div>
            </div>
            <div className='right flex'>
                <img className="officerimg" src={Katy} alt="Katy holding a baby owl" />
                <div>
                <h2>Katy Trueblood - Certified Humane Officer</h2>
                <p>
                Lorem ipsum dolor sit amet. 33 voluptatem deserunt ut dolorem maxime et sunt ducimus rem ullam voluptate. Rem omnis aspernatur ab possimus deserunt in nulla nemo in soluta voluptas nam similique sint.
                </p>
                </div>
            </div>
            <div className='left flex'>
                <img className="officerimg" src={Casey} alt="Casey holding an eagle" />
                <div className='officer-info'>
                <h2>Casey Jones - Certified Humane Officer</h2>
                <p>
                Lorem ipsum dolor sit amet. 33 voluptatem deserunt ut dolorem maxime et sunt ducimus rem ullam voluptate. Rem omnis aspernatur ab possimus deserunt in nulla nemo in soluta voluptas nam similique sint.
                </p>
                </div>
            </div>
            </div>
            <hr></hr>  
        </section>
    )
}

export default WhoWeAre;