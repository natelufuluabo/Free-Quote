import React from "react";
import axios from "axios";
import { DEFAULT_HEADERS, Product } from "../../Utilities/utilities";

export const getProducts = async (
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>,
    setProductError: React.Dispatch<React.SetStateAction<boolean>>
) => { 
    try {
        const products : Product [] = (await axios.get('https://nesto-fe-exam.vercel.app/api/products', {
            headers : {
                ...DEFAULT_HEADERS
            }
        })).data
        setProducts(products);
    } catch (error) {
        if (error instanceof Error) setProductError(true);
    }
}