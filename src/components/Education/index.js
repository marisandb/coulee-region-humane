import React from 'react';
import "./style.css"

function Education() {
    return (
        <section>
            <div className='list-items'>
            <h1>What should I do? I Found a Baby...</h1>
            <ul>
                <li><a href="#bunny">Bunny</a></li>
                <li><a href="#opossum">Opossum</a></li>
                <li><a href="#bird">Bird</a></li>
                <li><a href="#duckling">Duckling</a></li>
                <li><a href="#raccoon">Raccoon</a></li>
                <li><a href="#fawm">Fawn</a></li>
            </ul>
            </div>

            <div className='container'>
                <div id="bunny">
                    <h2>Bunny</h2>
                    <p>
                    If you stumble upon a nest of baby rabbits in your yard, it is almost always best to leave them be. Rabbits only feed their young twice a day and it is unlikely that you will see mom return to her nest. If you are concerned that the babies aren’t being fed, a great sign of healthy babies are nice round bellies. A baby that hasn’t been fed will have a sunken stomach and will need help right away. Other concerns that we often hear are regarding dogs attacking nests. In these cases we advise dog owners to temporarily keep their dogs leashed or to put up a barrier around the nest that still allows mom access. Rabbits only stay in the nest for about 3 weeks so this is only temporary. If you happen to find a young rabbit hopping around your yard with eyes open, this baby is likely old enough to be on its own and you can leave it be. If you are unsure what to do in your specific situation you can always give us a call and we are happy to answer any questions or concerns.    
                    </p>
                </div>
                <div id="opossum">
                    <h2>Opossum</h2>
                    <p>
                    It is unlikely that you will find a single baby opossum but it does occasionally happen. Sometimes moms can accidentally drop their babies. Generally babies smaller than 7 in long from nose to rear end, not including tail, will need assistance. Those larger than that can be left alone if they do not appear to be sick or injured. In the unfortunate circumstance that you find a deceased mom who is carrying babies, these babies will need immediate attention and we should be contacted right away. 
                    </p>
                </div>
                <div id="bird">
                    <h2>Bird</h2>
                    <p>
                    Unfortunately we are unable to take in baby birds. Generally we advise finders to attempt to re-nest baby birds with little feathers who appear to have fallen from their nest. Baby birds with feathers are most likely in their fledgling stage and being grounded is a normal part of their development. You may watch from a distance for a while to try to observe if their parents are returning to feed them.
                    </p>
                </div>
                <div id="duckling">
                    <h2>Duckling</h2>
                    <p>
                    We often get calls for ducklings who have fallen into storm drains and we are happy to help in these cases. If you find a single duckling it is also advised to contact us. If you find a group of ducklings and do not see a mom, please wait from a distance and observe to see if a mother duck returns. Moms often get spooked, especially in the city, and may fly into a nearby tree until they feel it is safe again. If a mother does not return, be cautious in attempting to corral them as they may scatter. If possible, wait until we arrive on scene. We advise people not to attempt assisting ducks in crossing roadways as this too often causes mom to fly away and babies to scatter.  
                    </p>
                </div>
                <div id='raccoon'>
                    <h2>Raccoon</h2>
                    <p>
                    We are unfortunately unable to take in baby raccoons. We may have contacts early in the season who can assist but their spaces fill up quickly. It is unlikely the baby you have found is truly orphaned, moms may leave their babies alone for up to 24 hours. Unless the baby is injured, appears sick, or you know the mother is truly gone and will not return, the best thing to do is to leave them be. 
                    </p>
                </div>
                <div id="fawn">
                    <h2>Fawn</h2>
                    <p>
                    We are unfortunately unable to take in fawns. There are also very few places in Wisconsin that are licensed to rehab deer. It is not uncommon for moms to leave their fawn alone while they are searching for food. Fawns are often found lying down in grass and should not be disturbed. If you happen to see a fawn crying and wandering around, that is often an indication that it needs help. In these cases you should contact your county's DNR for further instructions. 
                    </p>
                </div>
            </div>


        </section>
    )
}

export default Education;