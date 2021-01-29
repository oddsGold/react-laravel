import React from "react";
import preloader from "../../../img/Spinner-1s-297px.svg";

function Preloader(props){
    return(
        <div className="preloader">
            <img src={preloader} alt="Preloader"/>
        </div>
    )
}

export default Preloader;
