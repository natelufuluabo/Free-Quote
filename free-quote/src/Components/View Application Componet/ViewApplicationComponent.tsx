import React from "react";
import { useRecoilValue } from "recoil";
import { appRequestedAtom } from "../../State Management/atoms";
import { Product } from "../../Utilities/utilities";
import { handlePersonalRendering, handleProductRendering } from './Utilities';

interface propsType {
    products : Product[]
}

const ViewApplicationComponent = ({ products } : propsType) => {
    const appInfo = useRecoilValue(appRequestedAtom);
    const productInfo = products.filter(product => product.id === appInfo.productId);
    const handleRenderingPersonal = handlePersonalRendering(appInfo);
    const handleRenderingProduct = handleProductRendering(productInfo);
    return (
        <>
            {handleRenderingPersonal}
            {handleRenderingProduct}
        </>
    )
}

export default ViewApplicationComponent;