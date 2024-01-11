import { useDispatch, useSelector } from "react-redux";
import ContainerSections from "../../components/ContainerSections/ContainerSections"
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import { changeToView } from "../../store/formRegistrySlice";
import { useEffect } from "react";
import FormPurchaseOfMerchandise from "./FormPurchaseOfMerchandise/FormPurchaseOfMerchandise";

const PurchaseOfMerchandise = () => {

    const dispatch = useDispatch();

    const isViewMode = useSelector((state) => state.formRegistry.isView);

    useEffect(() => {
        dispatch(changeToView())
    }, [])

    return (
        <ContainerSections>
            <HeaderSection
            text="Compra de mercadería" 
            btnTextPrimary="Añadir registro" 
            btnTextSecondary="Ver todos los registros"
            />
            {
                isViewMode ? (
                    <></>
                ) : (
                    <FormPurchaseOfMerchandise/>
                )
            }
        </ContainerSections>
    )
}

export default PurchaseOfMerchandise;