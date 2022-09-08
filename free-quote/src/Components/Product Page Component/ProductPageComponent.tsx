import React from "react";
import ProductComponent from "../Product Component/ProductComponent";
import { bestFixedAtom, bestVariableAtom } from "../../State Management/atoms";
import { useRecoilValue } from "recoil";

interface propsType {
    setProblemWithApplicationCreation : React.Dispatch<React.SetStateAction<boolean>>
}

const ProductPageComponent = ({ setProblemWithApplicationCreation } : propsType) => {
    const bestFixed = useRecoilValue(bestFixedAtom);
    const bestVariable = useRecoilValue(bestVariableAtom);
    return (
        <div className="productspage-container">
        <div className="productspage-headlines">
          <span className="productspage-headline1">Find the Best Mortgage</span>
          <span className="productspage-headline2">Rates in Canada</span>
        </div>
        <div className="productspage-products">
          <ProductComponent 
            product={bestFixed}
            setProblemWithApplicationCreation={setProblemWithApplicationCreation}
          />
          <ProductComponent 
            product={bestVariable}
            setProblemWithApplicationCreation={setProblemWithApplicationCreation}
          />
        </div>
      </div>
    )
}

export default ProductPageComponent;