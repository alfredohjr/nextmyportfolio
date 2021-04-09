import styled from 'styled-components';

export const Container = styled.div`

    min-height: 80vh;
    margin-bottom: 5px;

    .project-main {
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        background-color: #b6b6b6;
    }

    .input-data {
        padding: 15px;
        margin-top: 15px;
    }

    .textarea {
        padding:15px;
        margin-top: 15px;
        border: none;
    }

    .button {
        padding:15px;
        margin-top: 10px;
        border: none;
        background-color: #b62223;
        border-radius: 10px;
        text-align: center;
        width: 40%;
        height: 40%;
        margin-left: 15px;
        margin-right: 15px;

        &:hover {
            opacity: 85%;
        }
    }



`;