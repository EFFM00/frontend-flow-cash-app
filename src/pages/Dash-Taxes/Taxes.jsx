import ContainerSections from "../../components/ContainerSections/ContainerSections";
import HeaderSection from "../../components/HeaderSection/HeaderSection";

const Taxes = () => {
    return (
        <ContainerSections>
            <HeaderSection
            text="Impuestos" 
            btnTextPrimary="Añadir registro" 
            btnTextSecondary="Ver todos los registros"
            />
        </ContainerSections>
    )
}

export default Taxes;