import React from "react";
import './SelectedProductComponent.css';
import { useRecoilValue } from "recoil";
import { productSelectedAtom } from "../../State Management/atoms";

const SelectedProductComponent = () => {
    const product = useRecoilValue(productSelectedAtom);
    return (
        <div className="selected-product-container">
            <span className="selected-component-title" >Product Selected</span>
            <span className="selected-product-description">
                    <span className="selected-product-title" >BEST {product.type}</span>
                    <span className="selected-product-term" >{product.term[0]} Years</span>
                </span>
            <span className="selected-product-name" >{product.name}</span>
            <span className="selected-product-rate" >{product.bestRate}%</span>
            <span className="selected-product-lender" >{product.lenderName}</span>
        </div>
    )
}

export default SelectedProductComponent;