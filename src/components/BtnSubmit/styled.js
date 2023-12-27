import { styled } from "styled-components";

export const Btn = styled.button`
    font-weight: 500;
    color: ${props => props.colorText ?? "black"};
    width: 15rem;
    background-color: ${props => props.colorBack};
    padding: 0.6rem;
    border-radius: 5px;
    border: none;
    transition: background-color 0.12s ease, color 0.12s ease;
    font-size: 1rem;
    font-weight: 600;

    &:hover {
        background-color: #a6aec1;
        color: black;
        cursor: pointer;
    }

    &:active {
        background-color: #51647a;
    }
`