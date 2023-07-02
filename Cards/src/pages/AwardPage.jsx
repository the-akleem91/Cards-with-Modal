import React from "react";
import './AwardPage.css';
import AwardSection from "../Components/AwardSection";
import SponsorSection from "../Components/SponsorSection";

const AwardPage=()=>{
    return(
    <>
    <Navbar />
    <AwardSection />
    <SponsorSection />
    <Footer />
    </>
    )
}

export default AwardPage