import React from "react";
import { Application, Product } from '../../Utilities/utilities';

export const handlePersonalRendering = (appInfo: Application) => {
    const applicantsInfo = appInfo.applicants
    return applicantsInfo.map(applicant => {
        return (
            <div key={applicant.phone}>
                <label>Personal Informations</label>
                <div>
                    <label>First Name</label>
                    <label>{applicant.firstName}</label>
                </div>
                <div>
                    <label>Last Name</label>
                    <label>{applicant.lastName}</label>
                </div>
                <div>
                    <label>Email</label>
                    <label>{applicant.email}</label>
                </div>
                <div>
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
            <div key={product.bestRate}>
                <label>Product Informations</label>
                <div>
                    <label>Product Name</label>
                    <label>{product.name}</label>
                </div>
                <div>
                    <label>Product Type</label>
                    <label>{product.type}</label>
                </div>
                <div>
                    <label>Rate</label>
                    <label>{product.bestRate} %</label>
                </div>
                <div>
                    <label>Term Length</label>
                    <label>{product.term}</label>
                </div>
                <div>
                    <label>Lender</label>
                    <label>{product.lenderName}</label>
                </div>
            </div>
        )
    })
}
