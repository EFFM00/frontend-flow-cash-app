import { useDispatch, useSelector } from "react-redux";
import ContainerSections from "../../components/ContainerSections/ContainerSections"
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import { changeToView } from "../../store/formRegistrySlice";
import { useEffect } from "react";
import FormPurchaseOfMerchandise from "./FormPurchaseOfMerchandise/FormPurchaseOfMerchandise";
import AuthLayout from "../../components/AuthLayout";

const PurchaseOfMerchandise = () => {

    const dispatch = useDispatch();

    const isViewMode = useSelector((state) => state.formRegistry.isView);

    useEffect(() => {
        dispatch(changeToView())
    }, [])

    return (
        <AuthLayout authentication={true} roles={[]}>
            <ContainerSections>
                <HeaderSection
                text="Compra de mercadería" 
                btnTextPrimary="Añadir registro" 
                btnTextSecondary="Ver todos los registros"
                />
                {
                    isViewMode ? (
                        <>Acá estará la tabla para visualizar todos los datos</>
                    ) : (
                        <FormPurchaseOfMerchandise/>
                    )
                }
            </ContainerSections>
        </AuthLayout>
    )
}

export default PurchaseOfMerchandise;