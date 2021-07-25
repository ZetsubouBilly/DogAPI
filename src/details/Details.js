import React from "react"
import SearchBar from "../SearchBar"

import back from "../img/back.png"
import storyImage from "../img/story-img.png"




class Details extends React.Component {

    render() {
        return (

            <div className="details">
                <SearchBar /> 

                <div className="details_main">
                    <div className="details_main-head">
                        <button  className="btn-back"><img src={back} alt=""/></button>
                        <button className="btn-static_details">BREEDS</button>
                        <button className="btn-id">28</button>
                    </div>

                    <div className="details_main-body">
                         <div className="story__img"><img src={storyImage} alt="" /></div>
                         <div className="slider">
                             <div className="slider_dots">
                                 <button className="slider_dot"></button>
                                 <button className="slider_dot active"></button>
                                 <button className="slider_dot"></button>
                                 <button className="slider_dot"></button>
                                 <button className="slider_dot"></button>
                             </div>
                         </div>
                         
                    </div>
                    <div className="detail_description">
                             <div className="breeds_name">Basenji</div>
                             <div className="breeds_nature">Family companion dog</div>
                             <div className="breeds_feature">
                                 <div className="breeds_temp">
                                     <div className="temp_left"><span className="img__name">Temperament: </span><br />Affectionate, Energetic, Alert, Curious,     Playful, Intelligent
                                     </div>
                                
                                     <div className="temp_right">
                                        <div className="breeds_statistic"><span className="img__name">Height: </span>41 - 43 cm at the withers</div>
                                        <div className="breeds_statistic"><span className="img__name">Weight: </span>10 - 11 kgs</div>
                                        <div className="breeds_statistic"><span className="img__name">Life span: </span>10 - 12 years</div>
                                     </div>
                                 </div>
                             </div>

                         </div>

                </div>

               
            </div>
        )
    }
}


export default Details
