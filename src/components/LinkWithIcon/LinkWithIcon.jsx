import {ContBtn, PlusIcon} from "./styled"

const LinkWithIcon = ({text, iconPath}) => {
    return (
        <ContBtn>
            <PlusIcon src={iconPath} />
            {text}
        </ContBtn>
    )
}

export default LinkWithIcon;