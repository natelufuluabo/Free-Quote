import { atom } from "recoil";
import { DEFAULT_PRODUCT_STATE, DEFAULT_STATE_APPLICATION } from '../Utilities/utilities';

export const userInputAtom = atom({
    key : 'userInput',
    default : {
        firstName : '',
        lastName : '',
        email : '',
        phone : ''
    }
});

export const applicationAtom = atom({
    key:'application',
    default : DEFAULT_STATE_APPLICATION
});

export const productSelectedAtom = atom({
    key:'productSelected',
    default : DEFAULT_PRODUCT_STATE
});

export const bestFixedAtom = atom({
    key:'bestFixed',
    default : DEFAULT_PRODUCT_STATE
});

export const bestVariableAtom = atom({
    key:'bestVariable',
    default : DEFAULT_PRODUCT_STATE
});

export const languageAtom = atom({
    key:'language',
    default: false
});

export const appRequestedAtom = atom({
    key:'appRequested',
    default : DEFAULT_STATE_APPLICATION
})