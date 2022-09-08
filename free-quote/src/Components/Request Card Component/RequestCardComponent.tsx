import React from "react";
import { Link } from 'react-router-dom';

interface propsType {
    requestType : string,
    description : string
}

const RequestCardComponent = ({ requestType, description } : propsType) => {
    return (
        <div className="request-card-container">
            <Link to='/products'>
                <span className="request-card-type">{requestType}</span>
                <span className="request-card-description">{description}</span>
            </Link>
        </div>
    )
}

export default RequestCardComponent;