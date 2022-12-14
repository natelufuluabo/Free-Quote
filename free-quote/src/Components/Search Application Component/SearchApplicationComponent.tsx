import React, { useEffect, useState } from "react";
import './SearchApplication.css';
import { useRecoilState } from "recoil";
import { appRequestedAtom } from "../../State Management/atoms";
import { Application, formatForStyling, reformatforSubmission } from '../../Utilities/utilities';
import { getApplications, filteredApplications } from "./Utilities";

interface propsType {
    setAppFound: React.Dispatch<React.SetStateAction<boolean>>
    productError : boolean
}

const SearchApplicationComponent = ({ setAppFound, productError } : propsType) => {
    const [applications, setApplications] = useState<Application[]>([]);
    const [userPhone, setUserID] = useState('');
    const [errorFindingApp, setErrorFindingApp] = useState('');
    const [appRequested, setAppRequested] = useRecoilState(appRequestedAtom);
    const handleClick = (evt:React.MouseEvent<HTMLButtonElement>) => {
        evt.preventDefault();
        const userPhoneReformatted = reformatforSubmission(userPhone);
        filteredApplications(applications, setErrorFindingApp, userPhoneReformatted, setAppRequested, setAppFound, productError);
    }
    useEffect(() => {
        getApplications(setApplications, applications);
    }, [])
    return (
        <section className="search-application-container">
            <legend className="search-application-title">Please enter your phone number</legend>
            <div className="search-application-input-container">
                <input 
                    value={userPhone}
                    onChange={(evt) => setUserID(formatForStyling(evt.target.value))}
                />
                <div style={{ height : '1.5rem', marginBottom : '.5rem' }}>
                    {errorFindingApp && <span className="error-message">{errorFindingApp}</span>}
                </div>
            </div>
            <button className="search-application-button" onClick={handleClick}>Search</button>
        </section>
    )
}

export default SearchApplicationComponent;