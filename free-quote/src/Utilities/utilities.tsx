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
    applicants : [],
    productId : 0,
    createdAt : ''
}

export interface IFormInputs {
  firstName : string,
  lastName : string,
  email :  string,
  phone : string
}