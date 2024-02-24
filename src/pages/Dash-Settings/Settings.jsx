import TitleSection from "../../components/TitleSection/TitleSection";
import ContainerSections from "../../components/ContainerSections/ContainerSections"
import AuthLayout from "../../components/AuthLayout";

const Settings = () => {
    return (
        <AuthLayout authentication={true} roles={[]}>
            <ContainerSections>
                <TitleSection text="Ajustes" ubication="left"/>
            </ContainerSections>
        </AuthLayout>
    )
}

export default Settings;