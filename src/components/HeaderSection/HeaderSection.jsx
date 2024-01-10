import TitleSection from "../../components/TitleSection/TitleSection";
import LinkWithIcon from "../LinkWithIcon/LinkWithIcon";
import AddRegistry from "../../assets/icon_plus_circle_.svg"
import { HeaderCont } from "./styled";

const HeaderSection = ({text, btnText}) => {
    return (
        <HeaderCont>
            <TitleSection text={text} ubication="left"/>
            <LinkWithIcon text={btnText} iconPath={AddRegistry}/>
        </HeaderCont>
    )
}

export default HeaderSection;