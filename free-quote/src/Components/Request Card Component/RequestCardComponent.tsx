import React from "react";
import '../../Pages/Get A Quote /GetAQuotePage.css';
import { Link } from 'react-router-dom';

interface propsType {
    requestType : string,
    description : string
}

const RequestCardComponent = ({ requestType, description } : propsType) => {
    return (
        <Link className="request-card-container" to='/products'>
            <span className="request-card-type">{requestType}</span>
            <span className="request-card-description">{description}</span>
        </Link>
    )
}

export default RequestCardComponent;