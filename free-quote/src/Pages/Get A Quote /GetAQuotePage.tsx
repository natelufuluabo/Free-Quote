import React from "react";
import './GetAQuotePage.css';
import requestDetails from '../../Utilities/requestDetails';
import RequestCardComponent from "../../Components/Request Card Component/RequestCardComponent";

const GetAQuotePage = () => {
    const [newMortgage, renewal, refinance] = requestDetails;
    return (
        <article className="getaquote-container">
            <h1 className="getaquote-headline">How can we help you with your mortgage?</h1>
            <section className="getaquote-requests-container">
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
            </section>
        </article>
    )
}

export default GetAQuotePage;