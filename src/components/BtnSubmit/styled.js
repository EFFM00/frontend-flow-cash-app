import { styled } from "styled-components";

export const Btn = styled.button`
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    color: ${props => props.$colortext ?? "black"};
    align-self: ${props => props.$ubication};
    width: 100%;
    background-color: ${props => props.$colorback};
    padding: 0.6rem;
    border-radius: 5px;
    border: none;
    transition: background-color 0.12s ease, color 0.12s ease;
    font-size: 1rem;
    font-weight: 600;

    @media (min-width: 768px) {
        width: 15rem;
    }

    &:hover {
        background-color: #a6aec1;
        color: black;
        cursor: pointer;
    }

    &:active {
        background-color: #51647a;
    }
`