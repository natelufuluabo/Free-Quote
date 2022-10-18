import React, { useState } from "react";
import './ProductPageComponent.css'
import ProductComponent from "../Product Component/ProductComponent";
import { applicationAtom, bestFixedAtom, bestVariableAtom, productSelectedAtom } from "../../State Management/atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import { Link } from 'react-router-dom';
import DualRingComponent from "../Dual-Ring Component/DualRingComponent";
import { createApplication } from "../../Utilities/utilities";

interface propsType {
    problemWithApplicationCreation : boolean,
    setProblemWithApplicationCreation : React.Dispatch<React.SetStateAction<boolean>>
}

const ProductPageComponent = ({ problemWithApplicationCreation, setProblemWithApplicationCreation } : propsType) => {
    const bestFixed = useRecoilValue(bestFixedAtom);
    const bestVariable = useRecoilValue(bestVariableAtom);
    const [productSelected, setProductSelected] = useRecoilState(productSelectedAtom);
    // eslint-disable-next-line
    const [createdApplication, setCreatedApplication] = useRecoilState(applicationAtom);
    const [showBox, setShowBox] = useState(false);
    const [Loading, setLoading] = useState(false);
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
                    setCreatedApplication={setCreatedApplication}
                    setProductSelected={setProductSelected}
                />
                <ProductComponent 
                    setShowBox={setShowBox}
                    product={bestVariable}
                    setProblemWithApplicationCreation={setProblemWithApplicationCreation}
                    setCreatedApplication={setCreatedApplication}
                    setProductSelected={setProductSelected}
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
                        <button 
                            onClick={() => {
                                createApplication(
                                    productSelected, setCreatedApplication, 
                                    setProblemWithApplicationCreation, 
                                    setShowBox, setLoading
                                )
                                setLoading(true);
                            }} 
                            className="afterclickmessage-failed-button" 
                        >
                            Retry {Loading && <span><DualRingComponent /></span>}
                        </button>
                    </div>
                </aside>
            }
        </article>
    )
}

export default ProductPageComponent;