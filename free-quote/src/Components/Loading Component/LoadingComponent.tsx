import React from "react";
import './LoadingComponent.css';

const LoadingComponent = () => {
    return (
        <div className="waiting-page" >
            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            <span className="waiting-text" >Please wait...</span>
      </div>
    )
}

export default LoadingComponent;