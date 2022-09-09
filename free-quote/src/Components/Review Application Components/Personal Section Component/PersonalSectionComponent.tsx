import React, { useState } from "react";
import * as EmailValidator from 'email-validator';
import { useRecoilState } from 'recoil';
import { userInputAtom } from "../../../State Management/atoms";

interface IFormInputs {
    firstName : string,
    lastName : string,
    email :  string,
    phone : string
}

const PersonalSectionComponent = () => {
    const [firstEditingRequested, setFirstEditingRequested] = useState(false);
    const [lastEditingRequested, setLastEditingRequested] = useState(false);
    const [emailEditingRequested, setEmailEditingRequested] = useState(false);
    const [phoneEditingRequested, setPhoneEditingRequested] = useState(false);
    const [emailValidated, setEmailValidated] = useState(false);
    const [phoneValidated, setPhoneValidated] = useState(false);
    const [userInput, setUserInput] = useRecoilState(userInputAtom);
    
    const handleChange = (evt : React.ChangeEvent<HTMLInputElement>) => {
        if (!evt.target.value) return 
        const newObject = {...userInput, [evt.target.name] : evt.target.value};
        setUserInput(newObject);
    }
    const handleEmailValidation = () => {
        if (!EmailValidator.validate(userInput.email)) {
            setEmailValidated(false)
            setEmailEditingRequested(true);
        } else {
            setEmailValidated(true)
            setEmailEditingRequested(false);
        }
    }
    const handlePhoneValidation = () => {
        if (userInput.phone.length < 10 || userInput.phone.length > 10) {
            setPhoneValidated(false)
            setPhoneEditingRequested(true);
        } else {
            setPhoneValidated(true)
            setPhoneEditingRequested(false);
        }
    }
    return (
        <form>
            <label className="form-title">Please confirm identity</label>
            <div className='form-section'>
                <label>First Name</label>
                <div className="label-error-container">
                    <div
                        style={{
                            display : firstEditingRequested ? 'none' : 'block'
                        }}
                    >
                        <span>{userInput.firstName}</span>
                        <span onClick={(evt : React.MouseEvent<HTMLSpanElement>) => {
                                setFirstEditingRequested(true) 
                            }}
                        >
                            Edit
                        </span>
                    </div>
                    <div 
                        style={{
                            display : firstEditingRequested ? 'block' : 'none'
                        }}
                    >
                        <input
                            name="firstName"
                            onChange={handleChange}
                        />
                        <button onClick={(evt : React.MouseEvent<HTMLButtonElement>) => {
                            evt.preventDefault();
                            setFirstEditingRequested(false)
                        }}>Save</button>
                    </div>
                </div>
            </div>
            <div className='form-section'>
                <label>Last Name</label>
                <div className="label-error-container">
                    <div
                        style={{
                            display : lastEditingRequested ? 'none' : 'block'
                        }}
                    >
                        <span>{userInput.lastName}</span>
                        <span onClick={() => setLastEditingRequested(true)}>Edit</span>
                    </div>
                    <div 
                        style={{
                            display : lastEditingRequested ? 'block' : 'none'
                        }}
                    >
                        <input
                            name="lastName"
                            onChange={handleChange}
                        />
                        <button onClick={(evt : React.MouseEvent<HTMLButtonElement>) => {
                            evt.preventDefault();
                            setLastEditingRequested(false)
                        }}>Save</button>
                    </div>
                </div>
            </div>
            <div className='form-section'>
                <label>Email</label>
                <div className="label-error-container">
                    <div
                        style={{
                            display : emailEditingRequested ? 'none' : 'block'
                        }}
                    >
                        <span>{userInput.email}</span>
                        <span onClick={() => setEmailEditingRequested(true)}>Edit</span>
                    </div>
                    <div
                        style={{
                            display : emailEditingRequested ? 'block' : 'none'
                        }}
                    >
                        <input
                            name="email"
                            onChange={handleChange}
                        />
                        <button onClick={(evt : React.MouseEvent<HTMLButtonElement>) => {
                            evt.preventDefault();
                            handleEmailValidation()
                        }}>Save</button>
                        {!emailValidated && <p className="error-message">Invalid email address</p>}
                    </div>
            </div>
            </div>
            <div className='form-section'>
                <label>Phone</label>
                <div className="label-error-container">
                    <div
                        style={{
                            display : phoneEditingRequested ? 'none' : 'block'
                        }}
                    >
                        <span>{userInput.phone}</span>
                        <span onClick={() => setPhoneEditingRequested(true)}>Edit</span>
                    </div>
                    <div
                        style={{
                            display : phoneEditingRequested ? 'block' : 'none'
                        }}
                    >
                        <input
                            name="phone"
                            onChange={handleChange}
                            onKeyPress={(evt) => { if (!/[0-9]/.test(evt.key)) evt.preventDefault(); }}
                        />
                        <button onClick={(evt : React.MouseEvent<HTMLButtonElement>) => {
                            evt.preventDefault();
                            handlePhoneValidation()
                        }}>Save</button>
                        {!phoneValidated && <p className="error-message">Invalid phone number</p>}
                    </div>
                </div>
            </div>
            <button className="form-submit-button" type='submit'>Submit</button>
        </form>
    )
}

export default PersonalSectionComponent;