import styled from "styled-components";

export const DashboardWrapperCont = styled.div`
    display: grid;
    grid-template-columns: 1fr;

    @media (min-width: 768px) {
        grid-template-columns: 16.5rem 1fr;
    }
`

export const OutletCont = styled.div`
    grid-column: 1 / 2;

    @media (min-width: 768px) {
        grid-column: 2 / 3;    
    }
`