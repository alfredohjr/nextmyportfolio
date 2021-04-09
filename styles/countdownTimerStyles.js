import styled from 'styled-components';

export const Container = styled.div`
    
    min-height: 80vh;
    /* margin-bottom: 5px; */

    .project-main {
        background-color: #3AA7A3;
        margin-left: auto;
        margin-right: auto;
        padding: 15px;
        text-align: center;
    }

    .clock {
        width: 400px;
        height: 400px;
        background-color: #5EC2B7;
        margin-left: auto;
        margin-right: auto;
        color: white;
        padding: 5px;
    }

    .set-date {
        background-color: #3AA7A3;
        margin: 15px;
        color: black;
        border:none;
    }

    .title-main {
        margin-top: 25%;
    }

    .titles {
        margin-top: 15px;
        display: grid;
        grid-template-columns:repeat(4,1fr);
    }

    .day {
        color: white;
    }

    .hour {
        color: white;
    }

    .minute {
        color: white;
    }

    .second {
        color: white;
    }

    input {
        width: 95%;
    }
`;