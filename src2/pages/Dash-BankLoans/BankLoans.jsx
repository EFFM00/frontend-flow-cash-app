import { useDispatch, useSelector } from "react-redux";
import ContainerSections from "../../components/ContainerSections/ContainerSections"
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import { changeToView } from "../../store/formRegistrySlice";
import { useEffect } from "react";
import FormBankLoans from "./FormBankLoans/FormBankLoans";

const BankLoans = () => {

    const dispatch = useDispatch();

    const isViewMode = useSelector((state) => state.formRegistry.isView);

    useEffect(() => {
        dispatch(changeToView())
    }, [])

    return (
        <ContainerSections>
            <HeaderSection 
            text="Créditos bancarios" 
            btnTextPrimary="Añadir registro" 
            btnTextSecondary="Ver todos los registros"
            />
            {
                isViewMode ? (
                    <>Acá estará la tabla para visualizar todos los datos</>
                ) : (
                    <FormBankLoans/>
                )
            }
        </ContainerSections>
    )
}

export default BankLoans;