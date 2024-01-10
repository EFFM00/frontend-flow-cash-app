import ContainerSections from "../../components/ContainerSections/ContainerSections"
import HeaderSection from "../../components/HeaderSection/HeaderSection";

const BankLoans = () => {

    return (
        <ContainerSections>
            <HeaderSection 
            text="Créditos bancarios" 
            btnTextPrimary="Añadir registro" 
            btnTextSecondary="Ver todos los registros"
            />
        </ContainerSections>
    )
}

export default BankLoans;