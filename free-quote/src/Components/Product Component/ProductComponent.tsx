import React from "react";
import { Product } from "../../Utilities/utilities";

interface propsType {
    product : Product,
    setApplicationCreated : React.Dispatch<React.SetStateAction<boolean>>
}

const ProductComponent = ({ product, setApplicationCreated } : propsType) => {
    return (
        <div className="product-container">
            <span className="product-description">
                <span className="product-title">BEST {product.type}</span>
                <span className="product-term">{product.term}</span>
            </span>
            <span className="product-name" >{product.name}</span>
            <span className="product-rate" >{product.bestRate}%</span>
            <span className="product-lender" >{product.lenderName}</span>
            <button className="product-selection-button">Get this rate</button>
        </div>
    )
}

export default ProductComponent;