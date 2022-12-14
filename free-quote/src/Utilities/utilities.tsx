import axios from "axios";
import { SetterOrUpdater } from "recoil";

export type Product = {
    id: number;
    name: string;
    family: "VALUE_FLEX";
    type: "VARIABLE" | "FIXED";
    term:
      | "1_YEAR"
      | "2_YEAR"
      | "3_YEAR"
      | "4_YEAR"
      | "5_YEAR"
      | "6_YEAR"
      | "7_YEAR"
      | "10_YEAR";
    insurable: boolean;
    insurance: "INSURED" | "CONVENTIONAL";
    prepaymentOption: "STANDARD" | "HELOC";
    restrictionsOption:
      | "NO_RESTRICTIONS"
      | "SOME_RESTRICTIONS"
      | "MORE_RESTRICTIONS";
    restrictions: string;
    fixedPenaltySpread: string;
    helocOption: "HELOC_WITH" | "HELOC_WITHOUT";
    helocDelta: number;
    lenderName: string;
    lenderType: string;
    rateHold: "30_DAYS" | "45_DAYS" | "60_DAYS" | "90_DAYS" | "120_DAYS";
    rate: number;
    ratePrimeVariance: number;
    bestRate: number;
    created: string;
    updated: string;
};

export type Applicant = {
    phone: string;
    email: string;
    firstName: string;
    lastName: string;
};

export type Application = {
    id: string;
    type: string;
    applicants: {
      phone: string;
      email: string;
      firstName: string;
      lastName: string;
    }[];
    productId: number;
    createdAt: string;
};

export const DEFAULT_PRODUCT_STATE : Product = {
    id: 0,
    name: '',
    family: "VALUE_FLEX",
    type: "FIXED",
    term: '1_YEAR',
    insurable: false,
    insurance: "INSURED",
    prepaymentOption: "STANDARD",
    restrictionsOption: "NO_RESTRICTIONS",
    restrictions: '',
    fixedPenaltySpread: '',
    helocOption: "HELOC_WITHOUT",
    helocDelta: 0,
    lenderName: '',
    lenderType: '',
    rateHold: "120_DAYS",
    rate: 0,
    ratePrimeVariance: 0,
    bestRate: 0,
    created: '',
    updated: ''
};

export const DEFAULT_HEADERS = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "x-nesto-candidat": "Nathan Lufuluabo"
};

export type SetApplication = { 
    (
      valOrUpdater: { 
      id: string; 
      type: string; 
      applicants: { 
        phone: string; 
        email: string; 
        firstName: string; 
        lastName: string; 
      }[]; 
      productId: number; 
      createdAt: string; 
      } | 
      (
        (
          currVal: { id: string; type: string; applicants: { phone: string; email: string; firstName: string; lastName: string; }[]; productId: number; createdAt: string; }
        ) => { id: string; type: string; applicants: { phone: string; email: string; firstName: string; lastName: string; }[]; productId: number; createdAt: string; }
      )
    ): void; (arg0: any): void; 
} 

export const DEFAULT_STATE_APPLICATION = {
    id : '',
    type : "NEW",
    applicants : [{
      firstName : '',
      lastName : '',
      email : '',
      phone : ''
    }],
    productId : 0,
    createdAt : ''
}

export interface IFormInputs {
  firstName : string,
  lastName : string,
  email :  string,
  phone : string
}

export interface setCreatedApplication {
  id: string;
  type: string;
  applicants: {
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
  }[];
  productId: number;
  createdAt: string;
}

export const formatForStyling = (value:string) => {
  // return nothing if no value
  if (!value) return value; 

  // only allows 0-9 inputs
  const currentValue = value.replace(/[^\d]/g, '');
  const cvLength = currentValue.length; 

  // returns: "x", "xx", "xxx"
  if (cvLength < 4) return currentValue; 

  // returns: "(xxx)", "(xxx) x", "(xxx) xx", "(xxx) xxx",
  if (cvLength < 7) return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3)}`; 

  // returns: "(xxx) xxx-", (xxx) xxx-x", "(xxx) xxx-xx", "(xxx) xxx-xxx", "(xxx) xxx-xxxx"
  return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3, 6)}-${currentValue.slice(6, 10)}`; 
};

export const reformatforSubmission = (value:string) => {
  return `${value.slice(1,4)}${value.slice(6,9)}${value.slice(10)}`
}

export const createApplication = async (
  product : Product,
  setCreatedApplication : SetterOrUpdater<setCreatedApplication>,
  setProblemWithApplicationCreation : React.Dispatch<React.SetStateAction<boolean>>,
  setShowBox: React.Dispatch<React.SetStateAction<boolean>>,
  setLoading : React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
      const applicationCreated : Application = (await axios.post(`https://nesto-fe-exam.vercel.app/api/applications`, { productId: product.id }, {
      headers: {
              ...DEFAULT_HEADERS,
          }
      })).data
      setLoading(false);
      setCreatedApplication(applicationCreated);
      setProblemWithApplicationCreation(false);
      setShowBox(true);
  } catch (error) {
      if (error instanceof Error) {
          setLoading(false);
          setProblemWithApplicationCreation(true);
          setShowBox(true);
      }
  }
}