import axios from "axios";
import { SetterOrUpdater } from "recoil";
import { Application, Product, DEFAULT_HEADERS, setCreatedApplication } from '../../Utilities/utilities';

export const handleClick = (
    product : Product,
    setCreatedApplication : SetterOrUpdater<setCreatedApplication>,
    setProblemWithApplicationCreation : React.Dispatch<React.SetStateAction<boolean>>,
    setShowBox: React.Dispatch<React.SetStateAction<boolean>>
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
            setShowBox(true);
        } catch (error) {
            if (error instanceof Error) {
                setProblemWithApplicationCreation(true);
                setShowBox(true);
            }
        }
    }
    createApplication();
}