import React from "react";
import { useRecoilValue } from "recoil";
import { productSelectedAtom } from "../../../State Management/atoms";

const ProductSectionComponent = () => {
    const productSelected = useRecoilValue(productSelectedAtom);
    return (
        <div className="product-info-container">
            <div className="product-name-container">
                <label className="product-label">Product Name</label>
                <span
                    className="product-edit-container"
                >
                    <span className="product-name-review">{productSelected.name}</span>
                </span>
            </div>
            <div className="product-type-container">
                <label className="product-label">Product type</label>
                <span className="product-info">{productSelected.type}</span>
            </div>
            <div className="product-rate-container">
                <label className="product-label">Rate</label>
                <span className="product-info">{productSelected.bestRate} %</span>
            </div>
            <div className="product-lender-container">
                <label className="product-label">Lender</label>
                <span className="product-info">{productSelected.lenderName}</span>
            </div>
        </div>
    )
}

export default ProductSectionComponent;