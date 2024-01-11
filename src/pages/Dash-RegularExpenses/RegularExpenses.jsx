import ContainerSections from "../../components/ContainerSections/ContainerSections"
import HeaderSection from "../../components/HeaderSection/HeaderSection";

const RegularExpenses = () => {
    return (
        <ContainerSections>
            <HeaderSection
            text="Gastos recurrentes" 
            btnTextPrimary="Añadir registro" 
            btnTextSecondary="Ver todos los registros"
            />
        </ContainerSections>
    )
}

export default RegularExpenses;