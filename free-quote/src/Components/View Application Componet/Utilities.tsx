import React from "react";
import { Application, Product } from '../../Utilities/utilities';

export const handlePersonalRendering = (appInfo: Application) => {
    const applicantsInfo = appInfo.applicants
    return applicantsInfo.map(applicant => {
        return (
            <div key={applicant.phone} className="info-section-container">
                <label>Personal Informations</label>
                <div className="info-section">
                    <label>First Name</label>
                    <label>{applicant.firstName}</label>
                </div>
                <div className="info-section">
                    <label>Last Name</label>
                    <label>{applicant.lastName}</label>
                </div>
                <div className="info-section">
                    <label>Email</label>
                    <label>{applicant.email}</label>
                </div>
                <div className="info-section">
                    <label>Phone</label>
                    <label>{applicant.phone}</label>
                </div>
            </div>
        )
    })
}

export const handleProductRendering = (productInfo : Product[]) => {
    return productInfo.map(product => {
        return (
            <div key={product.bestRate} className="info-section-container">
                <label>Product Informations</label>
                <div className="info-section">
                    <label>Product Name</label>
                    <label>{product.name}</label>
                </div>
                <div className="info-section">
                    <label>Product Type</label>
                    <label>{product.type}</label>
                </div>
                <div className="info-section">
                    <label>Rate</label>
                    <label>{product.bestRate} %</label>
                </div>
                <div className="info-section">
                    <label>Term Length</label>
                    <label>{product.term}</label>
                </div>
                <div className="info-section">
                    <label>Lender</label>
                    <label>{product.lenderName}</label>
                </div>
            </div>
        )
    })
}
