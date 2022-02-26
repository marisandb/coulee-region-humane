import React from 'react';
import "./style.css"

// import images
import Kathy from '../../assets/staff/Kathy.jpg';
import Katy from '../../assets/staff/Katy.jpg';
import Casey from '../../assets/staff/Casey.jpg';


function WhoWeAre() {
    return (
        <section>
                <h1>Meet Our Certified Humane Officers</h1>
            <div>
                <img src={Kathy} alt="Kathy holding three baby owls" />
                <p>
                Lorem ipsum dolor sit amet. 33 voluptatem deserunt ut dolorem maxime et sunt ducimus rem ullam voluptate. Rem omnis aspernatur ab possimus deserunt in nulla nemo in soluta voluptas nam similique sint.
                </p>
            </div>
            <div>
                <img src={Katy} alt="Katy holding a baby owl" />
                <p>
                Lorem ipsum dolor sit amet. 33 voluptatem deserunt ut dolorem maxime et sunt ducimus rem ullam voluptate. Rem omnis aspernatur ab possimus deserunt in nulla nemo in soluta voluptas nam similique sint.
                </p>
            </div>
            <div>
                <img src={Casey} alt="Casey holding an eagle" />
                <p>
                Lorem ipsum dolor sit amet. 33 voluptatem deserunt ut dolorem maxime et sunt ducimus rem ullam voluptate. Rem omnis aspernatur ab possimus deserunt in nulla nemo in soluta voluptas nam similique sint.
                </p>
            </div>
        </section>
    )
}

export default WhoWeAre;