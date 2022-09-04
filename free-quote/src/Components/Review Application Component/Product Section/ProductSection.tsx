import React from "react";
import { Product } from "../../../Utilities/utilities";
import { productSelectedAtom } from "../../../State Management/atoms";
import { useRecoilValue } from "recoil";

const ProductSection = () => {
    const selectedProduct = useRecoilValue(productSelectedAtom)
    return (
        <div className="product-section-container">
            <div className="product-name-container">
                <label className="product-label">Product Name</label>
                <span
                    className="product-edit-container"
                >
                    <span className="product-name-review">{selectedProduct.name}</span>
                </span>
            </div>
            <div className="product-type-container">
                <label className="product-label">Product type</label>
                <span className="product-info">{selectedProduct.type}</span>
            </div>
            <div className="product-rate-container">
                <label className="product-label">Rate</label>
                <span className="product-info">{selectedProduct.bestRate}</span>
            </div>
            <div className="product-lender-container">
                <label className="product-label">Lender</label>
                <span className="product-info">{selectedProduct.lenderName}</span>
            </div>
        </div>
    )
}

export default ProductSection;