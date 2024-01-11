import ContainerSections from "../../components/ContainerSections/ContainerSections"
import HeaderSection from "../../components/HeaderSection/HeaderSection";

const ClientAndVendorManagement = () => {
    return (
        <ContainerSections>
            <HeaderSection
            text="Gestión de clientes y proveedores" 
            btnTextPrimary="Añadir registro" 
            btnTextSecondary="Ver todos los registros"
            />
        </ContainerSections>
    )
}

export default ClientAndVendorManagement;