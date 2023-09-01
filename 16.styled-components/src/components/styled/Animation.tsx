import styled, { keyframes } from "styled-components";


export const rotate = keyframes `
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(359deg);
    }

`;

export const AnimatedButton = styled.button`
background-color: lightyellow;
    animation: ${rotate} 4s linear infinite;
`;

export const TransitionButton = styled.button`


background-color: lightblue;
transition: background-color 1s linear;

&:hover {
    background-color: lightgrey;
}
`;