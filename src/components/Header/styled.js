import { styled } from "styled-components";

export const MenuContainer = styled.div`
    height: calc(100vh - 2.4rem);
    top: 2.4rem;
    background-color: #616161;
    max-width: 16.5rem;
    width: 95vw;
    transform: translateX(${props => (props.$isopen ? '0' : '-100%')});
    transition: transform 0.3s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
    overflow: scroll;

    @media (min-width: 768px) {
        position: inherit;
    }
`

export const NavBar = styled.nav`
    height: 2.4rem;
    cursor: pointer;
    width: 100vw;
    background-color: #8B8B8B;
    display: flex;
    align-items: center;
    padding: 0.8rem;
    justify-content: end;
`

export const ImgIcon = styled.img`
    display: block;
    width: 1.3rem;
    @media (min-width: 768px) {
        display: none;
    }
`

export const NavContainer = styled.div`
    position: sticky;
    top: 0;
`