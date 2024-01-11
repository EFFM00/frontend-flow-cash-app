import ContainerSections from "../../components/ContainerSections/ContainerSections"
import HeaderSection from "../../components/HeaderSection/HeaderSection";

const Banks = () => {
    return (
        <ContainerSections>
            <HeaderSection
            text="Bancos" 
            btnTextPrimary="Añadir registro" 
            btnTextSecondary="Ver todos los registros"
            />
        </ContainerSections>
    )
}

export default Banks;