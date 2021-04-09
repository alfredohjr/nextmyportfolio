import styled from 'styled-components';

export const Container = styled.div`

    font-family: 'Inter', sans-serif;
    
    .main {
        display: grid;
        grid-template-columns: repeat(3,400px);
        grid-gap: 10px;
    }

    .card {
        background: rgb(0,0,0);
        background: linear-gradient(0deg, rgba(0,0,0,1) 60%, rgba(255,255,255,1) 60%);
        height: 300px;
        border-radius: 5px;
        color: white;
        padding: 5px;

        display: grid;
        grid-template-rows: 60% 10% 20% 1% 10%;
    }

    h1 {
        text-align: center;
        margin-bottom: 40px;
    }

    img {
        display: block;
        width: 40%;
        margin-top: 20px;
        margin-left: auto;
        margin-right: auto;
        border-radius: 50%;
    }

    hr {
        height: 1px;
        border-width: 1;
    }

    .title, .description, .date {
        /* margin-bottom: 12px; */
    }

    .title {
        height: 10%;
    }

    .date {
        text-align: right;
        font-size: 12px;
    }
`;