import { useDispatch } from "react-redux";
import ContainerSections from "../../components/ContainerSections/ContainerSections"
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import { changeToView } from "../../store/formRegistrySlice";
import { useEffect } from "react";
import AuthLayout from "../../components/AuthLayout";

const SalesRegistry = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeToView())
    }, [])

    return (
        <AuthLayout authentication={true} roles={[]}>
            <ContainerSections>
                <HeaderSection
                text="Registro de ventas" 
                btnTextPrimary="Añadir registro" 
                btnTextSecondary="Ver todos los registros"
                />
            </ContainerSections>
        </AuthLayout>
    )
}

export default SalesRegistry;