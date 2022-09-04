import React from "react";
import { Product } from "../../Utilities/utilities";
import { productSelectedAtom } from "../../State Management/atoms";
import { useRecoilValue } from "recoil";

const SelectedProductComponent = () => {
    const selectedProduct = useRecoilValue(productSelectedAtom)
    return (
        <div className="selected-product-container">
            <b className="component-title" >Product Selected</b>
            <span className="product-description">
                    <span className="product-title" >{selectedProduct.type}</span>
                    <span className="product-term" >{selectedProduct.term}</span>
                </span>
            <span className="product-name" >{selectedProduct.name}</span>
            <span className="product-rate" >{selectedProduct.bestRate} %</span>
            <span className="product-lender" >{selectedProduct.lenderName}</span>
        </div>
    )
}

export default SelectedProductComponent;