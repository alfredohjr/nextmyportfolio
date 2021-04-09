import styled from 'styled-components';

export const Container = styled.div`

    min-height: 80vh;
    margin-bottom: 5px;

    .project-main {
        background-color: #a1a1a1;
        margin-left:auto;
        margin-right:auto;
        padding: 15px;
        text-align: center;
    }

    .square {
        margin-top: 15px;
        margin-left: auto;
        margin-right: auto;
        width: 300px;
        height: 300px;
        border-color: 10px;
        border-radius: ${props => props.border}%;
        background-color: #b3b3b3;
        text-align: center;
        padding:70px;
    }
`;