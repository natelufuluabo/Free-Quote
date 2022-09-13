import React, { useState, useEffect } from "react";
import './ViewApplication.css';
import { Product } from "../../Utilities/utilities";
import SearchApplicationComponent from "../../Components/Search Application Component/SearchApplicationComponent";
import ViewApplicationComponent from "../../Components/View Application Componet/ViewApplicationComponent";
import { getProducts } from './Utilities';

const ViewApplicationPage = () => {
    const [appFound, setAppFound] = useState(false);
    const [products, setProducts] = useState<Product[]>([]);
    const [productError, setProductError] = useState(false)
    useEffect(() => {
        getProducts(setProducts, setProductError);
    }, [])
    return (
        <div className="view-application-page-container">
            <SearchApplicationComponent setAppFound={setAppFound} productError={productError} />
            {
                (appFound && !productError) && <ViewApplicationComponent products={products} />
            }
        </div>
    )
}

export default ViewApplicationPage;