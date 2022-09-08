import axios from "axios";
import { SetterOrUpdater } from "recoil";
import { DEFAULT_HEADERS, Product } from "../../Utilities/utilities";
import LoadingComponent from "../../Components/Loading Component/LoadingComponent";
import ProductPageComponent from "../../Components/Product Page Component/ProductPageComponent";
import { Link } from "react-router-dom";

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

export const handleContentDisplaying = (
  downloadProductErrorMessage : string, 
  problemWithApplicationCreation : boolean, 
  setProblemWithApplicationCreation : React.Dispatch<React.SetStateAction<boolean>>,
  productLoading : boolean, showBox : boolean, 
  setShowBox : React.Dispatch<React.SetStateAction<boolean>>
) => {
  const handleWaitingTime = () => {
    if (productLoading) return ( <> <LoadingComponent/> </> )
    else return (
      <>
        <ProductPageComponent setProblemWithApplicationCreation={setProblemWithApplicationCreation} />
      </>
    )
  }
  
  handleWaitingTime();
  
  const handleAfterClickBehavior = (
    problemWithApplicationCreation : boolean, 
    downloadProductErrorMessage : string, showBox : boolean,
    setShowBox : React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    if (problemWithApplicationCreation) {
      setShowBox(true);
      return (
        <div>
          <ProductPageComponent setProblemWithApplicationCreation={setProblemWithApplicationCreation} />
          <div
            style={{
              display : showBox ? 'block' : 'none'
            }}
          >
            <span>
              <span>{downloadProductErrorMessage}</span>
              <span onClick={() => setShowBox(false)} >Retry</span>
            </span>
          </div>
        </div>
      )
    } else {
      setShowBox(true)
      return (
        <div>
          <ProductPageComponent setProblemWithApplicationCreation={setProblemWithApplicationCreation} />
          <div
            style={{
              display : showBox ? 'block' : 'none'
            }}
          >
            <span>
              <span>{downloadProductErrorMessage}</span>
              <Link to='/contact'>
                <span onClick={() => setShowBox(false)} >Retry</span>
              </Link>
            </span>
          </div>
        </div>
      )
    }

  }

  // return contLoading;
}