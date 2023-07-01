import React from "react";
import './SpeakerHeading.css'
import SpeakerCard from "./SpeakerCard";

const SpeakerHeading=()=>{
    return(
        <div className="SpeakContainer">
            <SpeakerCard />
            <SpeakerCard />
            <SpeakerCard />

        </div> 
    )
}

export default SpeakerHeading