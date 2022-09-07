import axios from "axios";
import { SetterOrUpdater } from "recoil";
import { DEFAULT_HEADERS, Product } from "../../Utilities/utilities";

export const downloadProducts = async (
    setBestFixed : SetterOrUpdater<Product>,
    setBestVariable : SetterOrUpdater<Product>, 
    setDownloadProductErrorMessage : React.Dispatch<React.SetStateAction<string>>,
    setProductLoading : React.Dispatch<React.SetStateAction<boolean>>,) => {
    try {
        const products : Product [] = (await axios.get('https://nesto-fe-exam.vercel.app/api/products', {
          headers : {
            ...DEFAULT_HEADERS
          }
        })).data
        const fixedRates = ((products).filter(product => product.type === 'FIXED')).sort((product1, product2) => product1.bestRate - product2.bestRate);
        setBestFixed(fixedRates[0]);
        const variableRates = products.filter(product => product.type === 'VARIABLE').sort((product1, product2) => product1.bestRate - product2.bestRate);
        setBestVariable(variableRates[0]);
        setProductLoading(false);
    } catch (error) {
        if(error instanceof Error) {
          setDownloadProductErrorMessage(error.message);
        }
    }
}