import * as EmailValidator from 'email-validator';

interface parametersEmailValidation {
    userInput: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
    },
    setEmailValidated: React.Dispatch<React.SetStateAction<boolean>>,
    setErrorEmail: React.Dispatch<React.SetStateAction<boolean>>,
    setEmailEditingRequested: React.Dispatch<React.SetStateAction<boolean>>
}

export const handleEmailValidation = ({ userInput, setEmailValidated, setErrorEmail, setEmailEditingRequested } : parametersEmailValidation) => {
    if (!EmailValidator.validate(userInput.email)) {
        setEmailValidated(false);
        setErrorEmail(true);
        setEmailEditingRequested(true);
    } else {
        setEmailValidated(true);
        setErrorEmail(false);
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
    setErrorPhone: React.Dispatch<React.SetStateAction<boolean>>,
    setPhoneEditingRequested: React.Dispatch<React.SetStateAction<boolean>>
}

export const handlePhoneValidation = ({ userInput, setPhoneValidated, setErrorPhone, setPhoneEditingRequested } : parametersPhoneValidation) => {
    if (userInput.phone.length < 10 || userInput.phone.length > 10) {
        setPhoneValidated(false);
        setErrorPhone(true);
        setPhoneEditingRequested(true);
    } else {
        setPhoneValidated(true);
        setErrorPhone(false);
        setPhoneEditingRequested(false);
    }
}