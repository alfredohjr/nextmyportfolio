import styled from 'styled-components';


export const Container = styled.div`

    min-height: 80vh;
    margin-bottom: 5px;

    .project-main{
        margin-left:auto;
        margin-right:auto;
    }

    .calculator {
        text-align:center;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 2px;
    }

    input {
        padding: 15px;
        #height: 70px;
        #width: 70px;
        text-align:center;
        background: #b1b1b1;
        border:none;
    }


    .calculator-display {
        margin-bottom: 15px;
        margin-top: 15px;
        width: 100%;
        text-align: right;
    }

    .display-none {
        visibility: hidden;
    }
`;