import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { appRequestedAtom } from "../../State Management/atoms";
import { Application } from '../../Utilities/utilities';
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
        filteredApplications(applications, setErrorFindingApp, userPhone, setAppRequested, setAppFound, productError);
    }
    useEffect(() => {
        getApplications(setApplications, applications);
    }, [])
    return (
        <div>
            <span>Please enter your phone number</span>
            <form>
                <div>
                    <input 
                        value={userPhone}
                        onChange={(evt) => setUserID(evt.target.value)}
                    />
                    {errorFindingApp && <span>{errorFindingApp}</span>}
                </div>
                <button onClick={handleClick}>Search</button>
            </form>
        </div>
    )
}

export default SearchApplicationComponent;