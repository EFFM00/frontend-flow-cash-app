import ContainerSections from "../../components/ContainerSections/ContainerSections"
import HeaderSection from "../../components/HeaderSection/HeaderSection";

const CashFlow = () => {
    return (
        <ContainerSections>
            <HeaderSection
            text="Flujo de caja" 
            btnTextPrimary="Añadir registro" 
            btnTextSecondary="Ver todos los registros"
            />
        </ContainerSections>
    )
}

export default CashFlow;