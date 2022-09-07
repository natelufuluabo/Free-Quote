import React, { useEffect, useState } from "react";
import ProductComponent from "../../Components/Product Component copy/ProductComponent";
import { useRecoilState } from "recoil";
import { bestFixedAtom, bestVariableAtom } from "../../State Management/atoms";
import { downloadProducts } from './Utilities';

const ProductsPage = () => {
    const [productLoading, setProductLoading] = useState(true);
    const [downloadProductErrorMessage, setDownloadProductErrorMessage] = useState('');
    const [problemWithApplicationCreation, setProblemWithApplicationCreation] = useState(false);
    const [bestFixed, setBestFixed] = useRecoilState(bestFixedAtom);
    const [bestVariable, setBestVariable] = useRecoilState(bestVariableAtom);
    useEffect(() => {
        downloadProducts(
            setBestFixed, setBestVariable, 
            setDownloadProductErrorMessage,
            setProductLoading
        )
    },[])
    return (
        <div className="productspage-container">
            <div className="productspage-headlines">
                <span className="productspage-headline1">Find the Best Mortgage</span>
                <span className="productspage-headline2">Rates in Canada</span>
            </div>
            <div className="productspage-products">
                <ProductComponent 
                    product={bestFixed}
                    setProblemWithApplicationCreation={setProblemWithApplicationCreation}
                />
                <ProductComponent 
                    product={bestVariable}
                    setProblemWithApplicationCreation={setProblemWithApplicationCreation}
                />
            </div>
        </div>
    )
}

export default ProductsPage;