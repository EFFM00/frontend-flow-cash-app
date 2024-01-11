import ContainerSections from "../../components/ContainerSections/ContainerSections"
import HeaderSection from "../../components/HeaderSection/HeaderSection";

const OtherExpenses = () => {
    return (
        <ContainerSections>
            <HeaderSection
            text="Otros gastos" 
            btnTextPrimary="Añadir registro" 
            btnTextSecondary="Ver todos los registros"
            />
        </ContainerSections>
    )
}

export default OtherExpenses;