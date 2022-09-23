import React from "react";
import './ProductSectionComponent.css'
import { useRecoilValue } from "recoil";
import { productSelectedAtom } from "../../../State Management/atoms";

const ProductSectionComponent = () => {
    const productSelected = useRecoilValue(productSelectedAtom);
    return (
        <article className="product-info-container">
            <section className="product-name-container">
                <label className="product-label">Product Name</label>
                <span className="product-info">{productSelected.name}</span>
            </section>
            <section className="product-type-container">
                <label className="product-label">Product Type</label>
                <span className="product-info">{productSelected.type}</span>
            </section>
            <section className="product-rate-container">
                <label className="product-label">Rate</label>
                <span className="product-info">{productSelected.bestRate} %</span>
            </section>
            <section className="product-lender-container">
                <label className="product-label">Lender</label>
                <span className="product-info">{productSelected.lenderName}</span>
            </section>
        </article>
    )
}

export default ProductSectionComponent;