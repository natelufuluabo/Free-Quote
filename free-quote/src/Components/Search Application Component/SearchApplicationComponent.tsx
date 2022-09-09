import React, { useEffect, useState } from "react";
import axios from "axios";
import { DEFAULT_HEADERS, Application } from '../../Utilities/utilities';

const SearchApplicationComponent = () => {
    const [applications, setApplications] = useState<Application[]>([]);
    const [userPhone, setUserID] = useState('');
    const handleClick = (evt:React.MouseEvent<HTMLButtonElement>) => {
        evt.preventDefault();
        const filteredApplications = () => {
            for (let application of applications) {
                const applicants = application.applicants;
                for (let i = 0; i < applicants.length; i++) {
                    if (applicants[i].phone === userPhone) console.log(application);
                }
            }
        }
        filteredApplications();
    }
    useEffect(() => {
        const getApplications = async () => {
            try {
                const applications : Application[] = (await axios.get('https://nesto-fe-exam.vercel.app/api/applications', {
                    headers : {
                      ...DEFAULT_HEADERS
                    }
                })).data
                setApplications(applications);
            } catch (error) {
                if (error instanceof Error) {
                    console.log(error.message)
                }
            }
        }
        getApplications();
    }, [])
    return (
        <div>
            <span>Please enter your phone Number</span>
            <form>
                <input 
                    value={userPhone}
                    onChange={(evt) => setUserID(evt.target.value)}
                />
                <button onClick={handleClick}>Search</button>
            </form>
        </div>
    )
}

export default SearchApplicationComponent;