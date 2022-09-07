import React from "react";
import { Product } from "../../Utilities/utilities";
import { useRecoilState } from 'recoil';
import { productSelectedAtom, applicationAtom } from '../../State Management/atoms';
import { handleClick } from './Utilities';

interface propsType {
    product : Product,
    setProblemWithApplicationCreation : React.Dispatch<React.SetStateAction<boolean>>
}

const ProductComponent = ({ product, setProblemWithApplicationCreation } : propsType) => {
    const [productSelected, setProductSelected] = useRecoilState(productSelectedAtom);
    const [createdApplication, setCreatedApplication] = useRecoilState(applicationAtom);
    return (
        <div className="product-container">
            <span className="product-description">
                <span className="product-title">BEST {product.type}</span>
                <span className="product-term">{product.term}</span>
            </span>
            <span className="product-name" >{product.name}</span>
            <span className="product-rate" >{product.bestRate}%</span>
            <span className="product-lender" >{product.lenderName}</span>
            <button 
                onClick={() => { 
                        handleClick(
                            setProductSelected, product, setCreatedApplication, 
                            setProblemWithApplicationCreation
                        )
                        setProductSelected(product);
                    }
                } 
                className="product-selection-button"
            >
                Get this rate
            </button>
        </div>
    )
}

export default ProductComponent;