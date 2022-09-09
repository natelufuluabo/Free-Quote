import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as EmailValidator from 'email-validator';
import { useRecoilState } from 'recoil';
import { userInputAtom } from "../../State Management/atoms";

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
    const { register, formState: { errors }, handleSubmit } = useForm<IFormInputs>();
    const [userInput, setUserInput] = useRecoilState(userInputAtom);
    const onSubmit: SubmitHandler<IFormInputs> = data => {
        setUserInput({...data});
        setFormValidated(true);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label className="form-title">Please confirm identity</label>
            <div className='form-section'>
                <label>First Name</label>
                <div className="label-error-container">
                    <input
                        {...register("firstName", { required: true })}
                    />
                    {errors.firstName && <p className="error-message">Required</p>}
                </div>
            </div>
            <div className='form-section'>
                <label>Last Name</label>
                <div className="label-error-container">
                    <input
                        {...register("lastName", { required: true })}
                    />
                    {errors.lastName && <p className="error-message">Required</p>}
                </div>
            </div>
            <div className='form-section'>
                <label>Email</label>
                <div className="label-error-container">
                    <input
                        {...register("email", { required: true, validate : value => EmailValidator.validate(value) })}
                    />
                    {errors.email && <p className="error-message">Invalid email address</p>}
                </div>
            </div>
            <div className='form-section'>
                <label>Phone</label>
                <div className="label-error-container">
                    <input 
                        {...register(
                            "phone", 
                            { required : true, pattern : /[0-9]/, 
                                maxLength : 10, minLength : 10,
                            }
                            )
                        }
                        onKeyPress={(evt) => { if (!/[0-9]/.test(evt.key)) evt.preventDefault(); }}
                    />
                    {errors.phone && <p className="error-message">Invalid phone number</p>}
                </div>
            </div>
            <button className="form-submit-button" type='submit'>Submit</button>
        </form>
    )
}

export default Form;