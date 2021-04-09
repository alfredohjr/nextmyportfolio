import styled, {keyframes} from 'styled-components';


const forceLight = (color,shadow,smoth) => keyframes`

    0%,
    100% {
    box-shadow: 0 0 ${shadow}px ${smoth}px ${color};
    }
    50% {
    box-shadow: none;
    }

`;

export const Lamp = styled.div`

    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 10px;
    margin-left: auto;
    margin-right: auto;
    background: ${props => props.color};
    animation: ${props => forceLight(props.color,props.shadow,props.smoth)} 2s linear infinite;

`;

export const Container = styled.div`

    min-height: 80vh;
    margin-bottom: 5px;
    
    .project-main {
        background: black;
        color:#b3b3b3;
        margin-left: auto;
        margin-right: auto;
        padding: 30px;
        text-align: center;
    }

    .wall {
        display: grid;
        grid-template-columns:repeat(10, 1fr);
        grid-gap: 2px;
        margin-left: auto;
        margin-right: auto;
        background: black;
        padding: 10px;
    }

    h1 {
        color: white;
    }

    .control {
        margin-top: 15px;
        margin-left: auto;
        margin-right: auto;
    }

`;