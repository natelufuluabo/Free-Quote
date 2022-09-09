import React from "react";
import { useRecoilValue } from "recoil";
import { productSelectedAtom } from "../../State Management/atoms";

const SelectedProductComponent = () => {
    const product = useRecoilValue(productSelectedAtom);
    return (
        <div className="selected-product-container">
            <span className="component-title" >Product Selected</span>
            <span className="product-description">
                    <span className="product-title" >{product.type}</span>
                    <span className="product-term" >{product.term}</span>
                </span>
            <span className="product-name" >{product.name}</span>
            <span className="product-rate" >{product.bestRate}%</span>
            <span className="product-lender" >{product.lenderName}</span>
        </div>
    )
}

export default SelectedProductComponent;