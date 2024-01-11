import ContainerSections from "../../components/ContainerSections/ContainerSections"
import HeaderSection from "../../components/HeaderSection/HeaderSection";

const PurchaseOfMerchandise = () => {
    return (
        <ContainerSections>
            <HeaderSection
            text="Compra de mercadería" 
            btnTextPrimary="Añadir registro" 
            btnTextSecondary="Ver todos los registros"
            />
        </ContainerSections>
    )
}

export default PurchaseOfMerchandise;