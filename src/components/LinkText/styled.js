import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const LinkTo = styled(Link)`
    text-align: ${props => props.$ubication};
    width: fit-content;
`