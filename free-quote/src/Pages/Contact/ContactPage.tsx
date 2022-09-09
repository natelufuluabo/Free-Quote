import React, { useState } from "react";
import Form from "../../Components/Form/Form";
import SelectedProductComponent from "../../Components/Selected Product Component/SelectedProductComponent";
import { Link } from 'react-router-dom';

const ContactPage = () => {
    const [formValidated, setFormValidated] = useState(false);
    return (
        <div className="contactpage-container">
            <SelectedProductComponent />
            <Form setFormValidated={setFormValidated} />
            {formValidated && <div>
                <span>Application successfully updated</span>
                <Link to='/review'>Review Application</Link>
            </div>}
        </div>  
    )
}

export default ContactPage;