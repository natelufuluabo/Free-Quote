import React from "react";
import './GetAQuotePage.css';
import requestDetails from '../../Utilities/requestDetails';
import RequestCardComponent from "../../Components/Request Card Component/RequestCardComponent";

const GetAQuotePage = () => {
    const [newMortgage, renewal, refinance] = requestDetails;
    return (
        <div className="getaquote-container">
            <span className="getaquote-headline">How can we help you with your mortgage?</span>
            <div className="getaquote-requests-container">
                <RequestCardComponent
                    requestType={newMortgage.request}
                    description={newMortgage.description} 
                />
                <RequestCardComponent
                    requestType={renewal.request}
                    description={renewal.description} 
                />
                <RequestCardComponent
                    requestType={refinance.request}
                    description={refinance.description} 
                />
            </div>
        </div>
    )
}

export default GetAQuotePage;