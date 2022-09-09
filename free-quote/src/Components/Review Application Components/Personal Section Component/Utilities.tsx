import * as EmailValidator from 'email-validator';

interface parametersEmailValidation {
    userInput: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
    },
    setEmailValidated: React.Dispatch<React.SetStateAction<boolean>>,
    setError: React.Dispatch<React.SetStateAction<boolean>>,
    setEmailEditingRequested: React.Dispatch<React.SetStateAction<boolean>>
}

export const handleEmailValidation = ({ userInput, setEmailValidated, setError, setEmailEditingRequested } : parametersEmailValidation) => {
    if (!EmailValidator.validate(userInput.email)) {
        setEmailValidated(false);
        setError(true);
        setEmailEditingRequested(true);
    } else {
        setEmailValidated(true);
        setError(false);
        setEmailEditingRequested(false);
    }
}

interface parametersPhoneValidation {
    userInput: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
    },
    setPhoneValidated: React.Dispatch<React.SetStateAction<boolean>>,
    setError: React.Dispatch<React.SetStateAction<boolean>>,
    setPhoneEditingRequested: React.Dispatch<React.SetStateAction<boolean>>
}

export const handlePhoneValidation = ({ userInput, setPhoneValidated, setError, setPhoneEditingRequested } : parametersPhoneValidation) => {
    if (userInput.phone.length < 10 || userInput.phone.length > 10) {
        setPhoneValidated(false);
        setError(true);
        setPhoneEditingRequested(true);
    } else {
        setPhoneValidated(true);
        setError(false);
        setPhoneEditingRequested(false);
    }
}