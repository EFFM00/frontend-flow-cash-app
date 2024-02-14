import { useDispatch } from "react-redux";
import ContainerSections from "../../components/ContainerSections/ContainerSections"
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import { changeToView } from "../../store/formRegistrySlice";
import { useEffect } from "react";
import AuthLayout from "../../components/AuthLayout";

const ClientAndVendorManagement = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeToView())
    }, [])

    return (
        <AuthLayout authentication={true} roles={[]}>
            <ContainerSections>
                <HeaderSection
                text="Gestión de clientes y proveedores" 
                btnTextPrimary="Añadir registro" 
                btnTextSecondary="Ver todos los registros"
                />
            </ContainerSections>
        </AuthLayout>
    )
}

export default ClientAndVendorManagement;