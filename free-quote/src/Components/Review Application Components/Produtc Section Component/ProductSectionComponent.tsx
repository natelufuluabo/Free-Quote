import React from "react";
import './ProductSectionComponent.css'
import { useRecoilValue } from "recoil";
import { productSelectedAtom } from "../../../State Management/atoms";

const ProductSectionComponent = () => {
    const productSelected = useRecoilValue(productSelectedAtom);
    return (
        <section className="product-info-container">
            <div className="product-name-container">
                <label className="product-label">Product Name</label>
                <span className="product-info">{productSelected.name}</span>
            </div>
            <div className="product-type-container">
                <label className="product-label">Product Type</label>
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
        </section>
    )
}

export default ProductSectionComponent;