import React, { useEffect, useState } from "react";
import ProductComponent from "../../Components/Product Component/ProductComponent";
import { useRecoilState } from "recoil";
import { bestFixedAtom, bestVariableAtom } from "../../State Management/atoms";
import { downloadProducts, handleContentDisplaying } from './Utilities';

const ProductsPage = () => {
    const [productLoading, setProductLoading] = useState(true);
    const [downloadProductErrorMessage, setDownloadProductErrorMessage] = useState('');
    const [problemWithApplicationCreation, setProblemWithApplicationCreation] = useState(false);
    const [bestFixed, setBestFixed] = useRecoilState(bestFixedAtom);
    const [bestVariable, setBestVariable] = useRecoilState(bestVariableAtom);
    const [showBox, setShowBox] = useState(false);
    useEffect(() => {
        downloadProducts(
            setBestFixed, setBestVariable, 
            setDownloadProductErrorMessage,
            setProductLoading
        )
    },[])
    const contentUploading = handleContentDisplaying(
        downloadProductErrorMessage, problemWithApplicationCreation, 
        setProblemWithApplicationCreation, productLoading,
        showBox, setShowBox
      );
    return (
        <>
            {contentUploading}
        </>
    )
}

export default ProductsPage;