import ContainerSections from "../../components/ContainerSections/ContainerSections";
import TitleSection from "../../components/TitleSection/TitleSection";

const Dashboard = () => {
    return (
        <ContainerSections>
            <TitleSection text={"Dashboard"} ubication="left"/>
            <p>Acá irá el dashboard</p>
        </ContainerSections>
    );
}

export default Dashboard;
