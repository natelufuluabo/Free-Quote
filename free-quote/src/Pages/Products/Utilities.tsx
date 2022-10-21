import axios from "axios";
import { SetterOrUpdater } from "recoil";
import { DEFAULT_HEADERS, Product } from "../../Utilities/utilities";
import LoadingComponent from "../../Components/Loading Component/LoadingComponent";
import ProductPageComponent from "../../Components/Product Page Component/ProductPageComponent";

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
        setProductLoading(false);
        setDownloadProductErrorMessage(error.message);
        downloadProducts(
          setBestFixed, setBestVariable,
          setDownloadProductErrorMessage,
          setProductLoading
        );
      }
    }
}

export const handleContentDisplaying = (
  problemWithApplicationCreation : boolean, 
  setProblemWithApplicationCreation : React.Dispatch<React.SetStateAction<boolean>>,
  productLoading : boolean, downloadProductErrorMessage : string
) => {
  const handleWaitingTime = () => {
    if (productLoading) return ( <> <LoadingComponent/> </> )
    else {
      if (downloadProductErrorMessage) return (
        <img className="error-404" src={require('../../img404.jpg')} alt="Error-404"/>
      )
      else return (
        <>
          <ProductPageComponent
            problemWithApplicationCreation={problemWithApplicationCreation} 
            setProblemWithApplicationCreation={setProblemWithApplicationCreation} 
          />
        </>
      )
    }
  }
  
  const contLoading = handleWaitingTime();
  
  return contLoading;
}