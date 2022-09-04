import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInputs {
    phone : string
}

const SearchComponent = () => {
    const { register, formState: { errors }, handleSubmit } = useForm<IFormInputs>();
    return (
        <form>
            <span>Please enter phone to view your application</span>
            <input
                {...register(
                    "phone", 
                    { required : true, pattern : /[0-9]/, 
                        maxLength : 10, minLength : 10,
                    }
                    )
                }
                onKeyPress={(evt) => {
                    if (!/[0-9]/.test(evt.key)) evt.preventDefault();
                }}
            />
            <button>Search</button>
        </form>
    )
}

export default SearchComponent;