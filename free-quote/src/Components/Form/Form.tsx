import React, { useState } from "react";
import './Form.css';
import { useForm, SubmitHandler } from "react-hook-form";
import { useRecoilState } from 'recoil';
import { userInputAtom } from "../../State Management/atoms";
import { formatForStyling, reformatforSubmission } from "../../Utilities/utilities";

interface IFormInputs {
    firstName : string,
    lastName : string,
    email :  string,
    phone : string
}

interface propsType {
    setFormValidated : React.Dispatch<React.SetStateAction<boolean>>
}

const Form = ({ setFormValidated } : propsType) => {
    const { register, formState: { errors }, handleSubmit, setValue } = useForm<IFormInputs>();
    const [userInput, setUserInput] = useRecoilState(userInputAtom);
    const onSubmit: SubmitHandler<IFormInputs> = data => {
        // Reformat phone number to standard 
        const reformattedPhoneNumber = reformatforSubmission(data.phone);
        // Make sure the object submitted contains the phone reformatted
        const newObject = {...data, phone : reformattedPhoneNumber};
        setUserInput({...newObject});
        setFormValidated(true);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label className="form-title">Please confirm identity</label>
            <div className='form-section'>
                <div className="label-entry-container">
                    <label className="label-title">First Name</label>
                    <input
                        {...register("firstName", { required: true })}
                    />
                </div>
                <div className="label-error-container">
                    <div style={{ width : '100%', height : '2rem' }}></div>
                    {errors.firstName && <p className="error-message">Required</p>}
                </div>
            </div>
            <div className='form-section'>
                <div className="label-entry-container">
                    <label className="label-title">Last Name</label>
                    <input
                        {...register("lastName", { required: true })}
                    />
                </div>
                <div className="label-error-container">
                    <div style={{ width : '100%', height : '2rem' }}></div>
                    {errors.lastName && <p className="error-message">Required</p>}
                </div>
            </div>
            <div className='form-section'>
                <div className="label-entry-container">
                    <label className="label-title">Email</label>
                    <input
                        {...register("email", { required: true })}
                    />
                </div>
                <div className="label-error-container">
                    <div style={{ width : '100%', height : '2rem' }}></div>
                    {errors.email && <p className="error-message">Invalid email address</p>}
                </div>
            </div>
            <div className='form-section'>
                <div className="label-entry-container">
                    <label className="label-title">Phone</label>
                    <input 
                        {...register(
                            "phone", 
                            { required : true, pattern : /[0-9]/, 
                                maxLength : 14, minLength : 14,
                            }
                            )
                        }
                        onKeyPress={(evt) => { if (!/[0-9]/.test(evt.key)) evt.preventDefault(); }}
                        onChange={(evt) => setValue("phone", formatForStyling(evt.target.value))}
                    />
                </div>
                <div className="label-error-container">
                    <div style={{ width : '100%', height : '2rem' }}></div>
                    {errors.phone && <p className="error-message">Invalid phone number</p>}
                </div>
            </div>
            <button className="form-submit-button" type='submit'>Save info</button>
        </form>
    )
}

export default Form;

function formState(formState: any) {
    throw new Error("Function not implemented.");
}
