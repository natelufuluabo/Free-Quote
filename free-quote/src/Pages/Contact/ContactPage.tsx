import React, { useState } from "react";
import './ContactPage.css';
import Form from "../../Components/Form/Form";
import SelectedProductComponent from "../../Components/Selected Product Component/SelectedProductComponent";
import { Link } from 'react-router-dom';

const ContactPage = () => {
    const [formValidated, setFormValidated] = useState(false);
    return (
        <article className="contactpage-container">
            <SelectedProductComponent />
            <Form setFormValidated={setFormValidated} />
            {formValidated && <div className="afterclick-container">
                <aside className="afterclickmessage-container">
                    <span>Application successfully updated</span>
                    <Link className="afterclickmessage-success-button" to='/review'>Review Application</Link>
                </aside>
            </div>}
        </article>  
    )
}

export default ContactPage;