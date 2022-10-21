import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { bestFixedAtom, bestVariableAtom } from "../../State Management/atoms";
import { downloadProducts, handleContentDisplaying } from './Utilities';

const ProductsPage = () => {
    const [productLoading, setProductLoading] = useState(true);
    const [downloadProductErrorMessage, setDownloadProductErrorMessage] = useState('');
    const [problemWithApplicationCreation, setProblemWithApplicationCreation] = useState(false);
    // eslint-disable-next-line
    const [bestFixed, setBestFixed] = useRecoilState(bestFixedAtom);
    // eslint-disable-next-line
    const [bestVariable, setBestVariable] = useRecoilState(bestVariableAtom);
    useEffect(() => {
        downloadProducts(
            setBestFixed, setBestVariable, 
            setDownloadProductErrorMessage,
            setProductLoading
        )
        // eslint-disable-next-line
    },[])
    const contentUploading = handleContentDisplaying(
        problemWithApplicationCreation, 
        setProblemWithApplicationCreation, productLoading,
        downloadProductErrorMessage
      );
    return (
        <>
            {contentUploading}
        </>
    )
}

export default ProductsPage;