import React, { useState } from "react";
import './ContactPage.css';
import Form from "../../Components/Form/Form";
import SelectedProductComponent from "../../Components/Selected Product Component/SelectedProductComponent";
import { Link } from 'react-router-dom';

const ContactPage = () => {
    const [formValidated, setFormValidated] = useState(false);
    return (
        <div className="contactpage-container">
            <SelectedProductComponent />
            <Form setFormValidated={setFormValidated} />
            {formValidated && <div className="afterclick-container">
                <div className="afterclickmessage-container">
                    <span>Application successfully updated</span>
                    <Link className="afterclickmessage-success-button" to='/review'>Review Application</Link>
                </div>
            </div>}
        </div>  
    )
}

export default ContactPage;