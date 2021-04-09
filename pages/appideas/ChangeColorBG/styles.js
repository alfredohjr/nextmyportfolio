import styled, {keyframes} from 'styled-components';

const ChangeColor = keyframes`
    0%{background-color: #f4e749;}
    10%{background-color: #60bbf4;}
    20%{background-color: aqua;}
    30%{background-color: #7d42dd;}
    40%{background-color: #e5903a;}
    50%{background-color: #a58828;}
    60%{background-color: #bc3bbc;}
    70%{background-color: #164a16;}
    80%{background-color: #d94646;}
    90%{background-color: #b96c52;}
    100%{background-color: #bcef32;}
`;

export const Container = styled.div`

    min-height: 80vh;
    margin-bottom: 5px;

    .project-main {
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        background-color: #b6b6b6;
        padding: 15px;
    }

    .box {
        animation-name: ${ChangeColor};
        animation-duration: 10s;
        animation-iteration-count: infinite;
        width: 400px;
        height: 400px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 15px;
        margin-bottom: 15px;
        padding: 10px;
    }

`;