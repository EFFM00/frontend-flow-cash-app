import AuthLayout from "../../components/AuthLayout";
import ContainerSections from "../../components/ContainerSections/ContainerSections";
import TitleSection from "../../components/TitleSection/TitleSection";

const Dashboard = () => {
    return (
        <AuthLayout authentication={true} roles={[]}>
            <ContainerSections>
                <TitleSection text={"Dashboard"} ubication="left"/>
                <p>Acá irá el dashboard</p>
            </ContainerSections>
        </AuthLayout>
    );
}

export default Dashboard;
