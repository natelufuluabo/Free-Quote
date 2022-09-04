import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface propsType {
    label : string,
    detail : string
}

interface IFormInputs {
    input : string
}

const Personal_Info = ({ label, detail } : propsType) => {
    const [edit, setEdit] = useState(false);
    const { register, formState: { errors }, handleSubmit } = useForm<IFormInputs>();
    // const onSubmit: SubmitHandler<IFormInputs> = data => setUserInput({...data});
    return (
        <div className="review-personal-info-container" >
            <label className="review-label" >{label} : </label>
            <span
                style={{
                    display : edit ? 'none' : 'flex'
                }}
                className="review-info-container"
            >
                <span className="review-info" >{detail}</span>
                <span 
                    className="review-edit" 
                    onClick={() => setEdit(true)}
                >
                    Edit
                </span>
            </span>
            <form 
                // onSubmit={handleSubmit(onSubmit)}
                style={{
                    display : edit ? 'inline-block' : 'none'
                }}
            >
                <span className="review-edit-container" >
                    <input
                        onKeyPress={(evt) => {
                            if (label === 'Phone' || label === 'Telephone') {
                                if (!/[0-9]/.test(evt.key)) evt.preventDefault();
                            }
                        }}
                        className="review-edit-input"
                        // onChange={(evt) => setUserInput(evt.target.value)}
                    />
                    <button 
                        className="review-button-edit"
                    >
                        Save
                    </button>
                </span>
                {/* {
                    errorMessage && 
                    <span className="error-message">
                        {errorMessage}
                    </span>
                } */}
            </form>
        </div>
    )
}

export default Personal_Info;