import ContainerSections from "../../components/ContainerSections/ContainerSections"
import HeaderSection from "../../components/HeaderSection/HeaderSection";

const SalesRegistry = () => {
    return (
        <ContainerSections>
            <HeaderSection
            text="Registro de ventas" 
            btnTextPrimary="Añadir registro" 
            btnTextSecondary="Ver todos los registros"
            />
        </ContainerSections>
    )
}

export default SalesRegistry;