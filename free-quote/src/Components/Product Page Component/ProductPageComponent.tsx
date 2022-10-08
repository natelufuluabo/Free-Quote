import React, { useState } from "react";
import './ProductPageComponent.css'
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
        <article className="productspage-container">
            <section className="productspage-headlines">
                <span className="productspage-headline1">Find the <b>Best</b> Mortgage</span>
                <span className="productspage-headline2"><b>Rates</b> in Canada</span>
            </section>
            <section className="productspage-products">
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
            </section>
            {
                (showBox && !problemWithApplicationCreation) && 
                <aside className="afterclick-container">
                    <div className="afterclickmessage-success-container">
                        <span>Application Successfully created</span>
                        <Link className="afterclickmessage-success-button" to='/contact' onClick={() => setShowBox(false)} >Continue</Link>
                    </div>
                </aside>
            }
            {
                (showBox && problemWithApplicationCreation) &&
                <aside className="afterclick-container">
                    <div className="afterclickmessage-failed-container">
                        <span>Failed to create application</span>
                        <button onClick={() => setShowBox(false)} className="afterclickmessage-failed-button" >Retry</button>
                    </div>
                </aside>
            }
        </article>
    )
}

export default ProductPageComponent;