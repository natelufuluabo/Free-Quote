import React from "react";
import './LoadingComponent.css';

const LoadingComponent = () => {
    return (
        <section className="waiting-page" >
            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            <h3 className="waiting-text" >Please wait...</h3>
      </section>
    )
}

export default LoadingComponent;