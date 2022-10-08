import React, { useState } from "react";
import './ReviewPage.css'
import axios from "axios";
import { userInputAtom, applicationAtom } from "../../State Management/atoms";
import { useRecoilValue } from "recoil";
import { Link } from "react-router-dom";
import { DEFAULT_HEADERS, Application } from "../../Utilities/utilities";
import PersonalSectionComponent from "../../Components/Review Application Components/Personal Section Component/PersonalSectionComponent";
import ProductSectionComponent from "../../Components/Review Application Components/Produtc Section Component/ProductSectionComponent";

const ReviewPage = () => {
    const userInput = useRecoilValue(userInputAtom);
    const application = useRecoilValue(applicationAtom);
    const [updateSuccessful, setUpdateSuccessful] = useState(false);
    const [showBox, setShowBox] = useState(false);
    const handleClick = () => {
        const updateApplication = async () => {
            try {
                const updatedApplication = (await axios.put<Application>(
                    `https://nesto-fe-exam.vercel.app/api/applications/${application.id}`,
                    { applicants : [userInput] }, { headers : DEFAULT_HEADERS }
                )).data;
                setUpdateSuccessful(true);
                setShowBox(true);
            } catch (error) {
                setUpdateSuccessful(false);
                setShowBox(true);
            }
        }
        updateApplication();
    }
    return (
        <article className="review-page-container">
            <h1 className="review-page-title">Review application</h1>
            <PersonalSectionComponent />
            <ProductSectionComponent />
            <button className="review-page-button" onClick={handleClick}>Confirm</button>
            {
                (updateSuccessful && showBox) && 
                <div className="overlay">
                    <aside className="success-container">
                        <div className="headlines-container">
                            <span>Thank you for submitting your inquiry.</span> 
                            <span>One of our advisors will be in touch with you soon</span>
                        </div>
                        <Link to='/applications'>
                            <button className="success-button" onClick={() => setShowBox(false)}>View Application</button>
                        </Link>
                    </aside>
                </div>
            }
            {
                (!updateSuccessful && showBox) &&
                <div className="overlay">
                    <aside className="failure-container">
                        <span>Unable to update server</span>
                        <button className="failure-button" onClick={() => setShowBox(false)}>Retry</button>
                    </aside>
                </div>
            }
        </article>
    )
}

export default ReviewPage;