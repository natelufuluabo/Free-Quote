import React, { useState } from "react";
import axios from "axios";
import { userInputAtom, applicationAtom } from "../../State Management/atoms";
import { useRecoilValue } from "recoil";
import { Link } from "react-router-dom";
import { DEFAULT_HEADERS, Application } from "../../Utilities/utilities";
import PersonalSectionComponent from "../../Components/Review Application Components/Personal Section Component/PersonalSectionComponent";
import ProductSectionComponent from "../../Components/Review Application Components/Produtc Section Component/ProductSectionComponent";

const Review = () => {
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
        <div className="reviewpage-container">
            <PersonalSectionComponent />
            <ProductSectionComponent />
            <button onClick={handleClick}>submit</button>
            {
                showBox && 
                <div>
                    <div>
                        <div>
                            <span>Thank you for submitting your inquiry.</span> 
                            <span>One of our advisors will be in touch with you soon</span>
                        </div>
                    </div>
                    <Link to='/application'>
                        <button onClick={() => setShowBox(false)}>View Application</button>
                    </Link>
                </div>
            }
            {
                (!updateSuccessful && showBox) &&
                <div>
                    <div>
                        <span>Unable to update server</span>
                        <button onClick={() => setShowBox(false)}>Retry</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default Review;