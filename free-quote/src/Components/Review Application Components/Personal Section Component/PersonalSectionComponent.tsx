import React, { useState } from "react";
import './PersonalSectionComponent.css';
import * as EmailValidator from 'email-validator';
import { useRecoilState } from 'recoil';
import { userInputAtom } from "../../../State Management/atoms";
import { handleEmailValidation, handlePhoneValidation } from './Utilities'

const PersonalSectionComponent = () => {
    const [firstEditingRequested, setFirstEditingRequested] = useState(false);
    const [lastEditingRequested, setLastEditingRequested] = useState(false);
    const [emailEditingRequested, setEmailEditingRequested] = useState(false);
    const [phoneEditingRequested, setPhoneEditingRequested] = useState(false);
    const [emailValidated, setEmailValidated] = useState(false);
    const [phoneValidated, setPhoneValidated] = useState(false);
    const [errorPhone, setErrorPhone] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false)
    const [userInput, setUserInput] = useRecoilState(userInputAtom);
    
    const handleChange = (evt : React.ChangeEvent<HTMLInputElement>) => {
        if (!evt.target.value) return 
        const newObject = {...userInput, [evt.target.name] : evt.target.value};
        setUserInput(newObject);
    }
    return (
        <div className="personal-section-container">
            <div className='personal-section-section'>
                <label className="personal-section-label">First Name</label>
                {   !firstEditingRequested && 
                    <div className="edit-container">
                        <span>{userInput.firstName}</span>
                        <span className="edit-button" onClick={() => setFirstEditingRequested(true)}>Edit</span>
                    </div>
                }
                {   firstEditingRequested &&
                    <div className="edit-container">
                        <input
                            name="firstName"
                            onChange={handleChange}
                        />
                        <button className="save-button" onClick={(evt : React.MouseEvent<HTMLButtonElement>) => {
                            evt.preventDefault();
                            setFirstEditingRequested(false)
                        }}>Save</button>
                    </div>
                }
            </div>
            <div className='personal-section-section'>
                <label className="personal-section-label">Last Name</label>
                {   !lastEditingRequested && 
                    <div className="edit-container">
                        <span>{userInput.lastName}</span>
                        <span className="edit-button" onClick={() => setLastEditingRequested(true)}>Edit</span>
                    </div>
                }
                {   lastEditingRequested &&
                    <div className="edit-container">
                        <input
                            name="lastName"
                            onChange={handleChange}
                        />
                        <button className="save-button" onClick={(evt : React.MouseEvent<HTMLButtonElement>) => {
                            evt.preventDefault();
                            setLastEditingRequested(false)
                        }}>Save</button>
                    </div>
                }
            </div>
            <div className='personal-section-section'>
                <label className="personal-section-label">Email</label>
                {   !emailEditingRequested &&
                    <div className="edit-container">
                        <span>{userInput.email}</span>
                        <span className="edit-button" onClick={() => setEmailEditingRequested(true)}>Edit</span>
                    </div>
                }
                {   emailEditingRequested && 
                    <div className="edit-container">
                        <input
                            style={{
                                border : errorEmail ? '.1rem solid red' : '.1rem solid #3B9AE1'
                            }}
                            name="email"
                            onChange={handleChange}
                        />
                        <button  className="save-button" onClick={(evt : React.MouseEvent<HTMLButtonElement>) => {
                            evt.preventDefault();
                            handleEmailValidation({ userInput, setEmailValidated, setErrorEmail, setEmailEditingRequested })
                        }}>Save</button>
                    </div>
                }
            </div>
            <div className='personal-section-section'>
                <label className="personal-section-label">Phone</label>
                {   !phoneEditingRequested && 
                    <div className="edit-container">
                        <span>{userInput.phone}</span>
                        <span className="edit-button" onClick={() => setPhoneEditingRequested(true)}>Edit</span>
                    </div>
                }
                {   phoneEditingRequested &&
                    <div className="edit-container">
                        <input
                            style={{
                                border : errorPhone ? '.1rem solid red' : '.1rem solid #3B9AE1'
                            }}
                            name="phone"
                            onChange={handleChange}
                            onKeyPress={(evt) => { if (!/[0-9]/.test(evt.key)) evt.preventDefault(); }}
                        />
                        <button className="save-button" onClick={(evt : React.MouseEvent<HTMLButtonElement>) => {
                            evt.preventDefault();
                            handlePhoneValidation({ userInput, setPhoneValidated, setErrorPhone, setPhoneEditingRequested })
                        }}>Save</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default PersonalSectionComponent;