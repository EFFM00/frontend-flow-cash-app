import { useDispatch, useSelector } from "react-redux";
import ContainerSections from "../../components/ContainerSections/ContainerSections"
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import { changeToView } from "../../store/formRegistrySlice";
import { useEffect } from "react";
import FormBankLoans from "./FormBankLoans/FormBankLoans";
import AuthLayout from "../../components/AuthLayout";

const BankLoans = () => {

    const dispatch = useDispatch();

    const isViewMode = useSelector((state) => state.formRegistry.isView);

    useEffect(() => {
        dispatch(changeToView())
    }, [])

    return (
        <AuthLayout authentication={true} roles={[]}>
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
        </AuthLayout>
    )
}

export default BankLoans;