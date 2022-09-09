import React from "react";
import axios from "axios";
import { DEFAULT_HEADERS, Application } from '../../Utilities/utilities';
import { SetterOrUpdater } from "recoil";

export const getApplications = async (
    setApplications: React.Dispatch<React.SetStateAction<Application[]>>,
    applications: Application[]
) => {
    try {
        const applications : Application[] = (await axios.get('https://nesto-fe-exam.vercel.app/api/applications', {
            headers : {
              ...DEFAULT_HEADERS
            }
        })).data
        setApplications(applications);
    } catch (error) {
        if (error instanceof Error) {
            return applications
        }
    }
}

export const filteredApplications = (
    applications: Application[], 
    setErrorFindingApp: React.Dispatch<React.SetStateAction<string>>,
    userPhone: string, setAppRequested: SetterOrUpdater<Application>,
    setAppFound: React.Dispatch<React.SetStateAction<boolean>>,
    productError : boolean
) => {
    if (userPhone.length < 10 || userPhone.length > 10) return setErrorFindingApp('Invalid phone number');
    if (applications.length === 0 || productError) return setErrorFindingApp('Server doesnt respond. Retry');
    for (let application of applications) {
        const applicants = application.applicants;
        for (let i = 0; i < applicants.length; i++) {
            if (applicants[i].phone === userPhone && userPhone) {
                setErrorFindingApp('');
                setAppRequested(application);
                setAppFound(true);
                return
            } else setErrorFindingApp('No matches found');
        }
    }
}