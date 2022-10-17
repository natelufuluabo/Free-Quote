import React, { useState } from "react";
import './ProductComponent.css';
import DualRingComponent from "../Dual-Ring Component/DualRingComponent";
import { Product, createApplication, setCreatedApplication } from "../../Utilities/utilities";
import { SetterOrUpdater } from 'recoil';

interface propsType {
    setShowBox: React.Dispatch<React.SetStateAction<boolean>>,
    product : Product,
    setProblemWithApplicationCreation : React.Dispatch<React.SetStateAction<boolean>>,
    setCreatedApplication : SetterOrUpdater<setCreatedApplication>,
    setProductSelected : SetterOrUpdater<Product>,
}

const ProductComponent = ({ setShowBox, product, setProblemWithApplicationCreation, setCreatedApplication, setProductSelected } : propsType) => {
    const [Loading, setLoading] = useState(false);
    return (
        <article className="product-container">
            <span className="product-description">
                <span className="product-title">BEST {product.type}</span>
                <span className="product-term">{product.term[0]} Years</span>
            </span>
            <span className="product-name" >{product.name}</span>
            <span className="product-rate" >{product.bestRate}%</span>
            <span className="product-lender" >{product.lenderName}</span>
            <button 
                onClick={() => { 
                        createApplication(
                            product, setCreatedApplication, 
                            setProblemWithApplicationCreation, 
                            setShowBox, setLoading
                        )
                        setLoading(true);
                        setProductSelected(product);
                    }
                } 
                className="product-selection-button"
            >
                Get this rate {Loading && <span><DualRingComponent /></span>}
            </button>
        </article>
    )
}

export default ProductComponent;