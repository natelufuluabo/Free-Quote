import React from "react";
import { useRecoilValue } from "recoil";
import { userInputAtom } from '../../../State Management/atoms';
import Personal_Info from "./Personal_Info";

const PersonalSection = () => {
    const { firstName, lastName, email, phone } = useRecoilValue(userInputAtom)
    return (
        <div className="personal-section-container">
            <Personal_Info
                label="First Name"
                detail={firstName}
            />
            <Personal_Info
                label="Last Name"
                detail={lastName}
            />
            <Personal_Info
                label="Email"
                detail={email}
            />
            <Personal_Info
                label="Phone"
                detail={phone}
            />
        </div>
    )
}

export default PersonalSection;