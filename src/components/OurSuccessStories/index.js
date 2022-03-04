import React from 'react';
import "./style.css"

// Eagle Rescue Images
import eagle1 from "../../assets/eagle-rescue/eagle-rescue.jpg"
import eagle2 from "../../assets/eagle-rescue/eagle-rescue2.jpg"
import eagle3 from "../../assets/eagle-rescue/eagle-rescue3.jpg"

function OurSuccessStories() {
    return (
        <section>
            <div className='flex'>
                <div>
                <img className="eagle" src={eagle1} alt="Casey is holding the eagle while Katy watches. In the background you can see the train she came from" />
                </div>
                <div>
                <img className="eagle" src={eagle2} alt="Eagle standing in the containment kennel. Wings are slightly spread" />
                </div>
                <div>
                <img className="eagle" src={eagle3} alt="Eagle standing in the containment kennel with venison set out for it. She is in a defensive position." />
                </div>
                <div>
                <p>
                We received a call from the railway saying they had a Bald Eagle that was hit by the train and is stuck in the front guard rail of the train and is alive. Two of our rehabilitators quickly responded and found a juvenile Bald Eagle who was indeed stuck in the rail. One wing was stuck in one direction and the other wing stuck in a different rail the other way so the eagle could not free itself. Upon examination of the Eagle, we were truly amazed not to feel any fractures or injuries. This was proven true once radial graphs were taken. This was one lucky Eagle for sure. The next amazing thing is that we called the Railroad Conductor back to obtain the location where the Eagle was hit, and again, to our amazement this Eagle was hit about 80 miles away from La Crosse. The average speed of rail cars can be 70-80 mph. They cannot stop the train when this happens so this gal spent her day going for quite the ride. We still treated her for pain management for a few days and she is now up in our flight cage doing very well and flying short distances. We will transfer her to The Raptor Education Group who specializes in Eagles for more evaluation. The main concern is the pressure from the wind against the air sacks during her ride on the train, some may have ruptured. These will heal in time. They would like to do more evaluation of her in a larger flight area and also test for lead in the blood. She will be transferred within the next day or two. Ah, she’ll have stories for the Grandkids. “I remember that day I flew at 80 mph for 80 miles”   
                </p>
                </div>
            </div>
        </section>
    )
}

export default OurSuccessStories;