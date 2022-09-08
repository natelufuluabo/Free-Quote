import axios from "axios";
import { SetterOrUpdater } from "recoil";
import { Application, Product, DEFAULT_HEADERS, setCreatedApplication } from '../../Utilities/utilities';

export const handleClick = (
    setProductSelected : SetterOrUpdater<Product>, product : Product,
    setCreatedApplication : SetterOrUpdater<setCreatedApplication>,
    setProblemWithApplicationCreation : React.Dispatch<React.SetStateAction<boolean>>
) => {
    const createApplication = async () => {
        try {
            const applicationCreated : Application = (await axios.post(`https://nesto-fe-exam.vercel.app/api/applications`, { productId: product.id }, {
            headers: {
                    ...DEFAULT_HEADERS,
                }
            })).data
            console.log(applicationCreated);
            setCreatedApplication(applicationCreated);
            setProblemWithApplicationCreation(false);
        } catch (error) {
            if (error instanceof Error) {
                setProblemWithApplicationCreation(true);
            }
        }
    }
    createApplication();
}