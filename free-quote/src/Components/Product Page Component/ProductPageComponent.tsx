import React, { useState } from "react";
import ProductComponent from "../Product Component/ProductComponent";
import { bestFixedAtom, bestVariableAtom } from "../../State Management/atoms";
import { useRecoilValue } from "recoil";
import { Link } from 'react-router-dom';

interface propsType {
    problemWithApplicationCreation : boolean,
    setProblemWithApplicationCreation : React.Dispatch<React.SetStateAction<boolean>>
}

const ProductPageComponent = ({ problemWithApplicationCreation, setProblemWithApplicationCreation } : propsType) => {
    const bestFixed = useRecoilValue(bestFixedAtom);
    const bestVariable = useRecoilValue(bestVariableAtom);
    const [showBox, setShowBox] = useState(false);
    return (
        <div className="productspage-container">
            <div className="productspage-headlines">
                <span className="productspage-headline1">Find the Best Mortgage</span>
                <span className="productspage-headline2">Rates in Canada</span>
            </div>
            <div className="productspage-products">
                <ProductComponent 
                    setShowBox={setShowBox}
                    product={bestFixed}
                    setProblemWithApplicationCreation={setProblemWithApplicationCreation}
                    />
                <ProductComponent 
                    setShowBox={setShowBox}
                    product={bestVariable}
                    setProblemWithApplicationCreation={setProblemWithApplicationCreation}
                />
            </div>
            {
                (showBox && problemWithApplicationCreation === false) && 
                <div>
                    <div>
                        <span>Application Successfully created</span>
                        <Link to='/contact' onClick={() => setShowBox(false)} >Continue</Link>
                    </div>
                </div>
            }
            {
                (showBox && problemWithApplicationCreation) &&
                <div>
                    <div>
                        <span>Failed to create application</span>
                        <span onClick={() => setShowBox(false)} >Retry</span>
                    </div>
                </div>
            }
        </div>
    )
}

export default ProductPageComponent;