import { styled } from "styled-components";

export const MenuContainer = styled.div`
    height: calc(100vh - 2.4rem);
    top: 2.4rem;
    background-color: #616161;
    max-width: 16.5rem;
    width: 95%;
    transform: translateX(${props => (props.$is_open ? '0' : '-100%')});
    transition: transform 0.3s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
    overflow-y: scroll;
    position: fixed;
`

export const NavContainer = styled.div`
    position: fixed;
    top: 0;
`