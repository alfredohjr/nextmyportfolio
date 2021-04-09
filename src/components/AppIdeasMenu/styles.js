import styled from 'styled-components';

export const Container = styled.div`

    font-family: 'Inter', sans-serif;
    
    .main {
        display: grid;
        grid-template-columns: repeat(3,30%);
        grid-gap: 25px;
        font-family: 'Josefin Sans', sans-serif;
    }

    .card {
        background: rgb(0,0,0);
        background: linear-gradient(0deg, rgba(0,0,0,1) 60%, rgba(255,255,255,1) 60%);
        width: 90%;
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

  @media only screen and (max-width: 768px) {
  
    .main {
        display: grid;
        grid-template-columns: repeat(1,100%);
        grid-gap: 0px;
    }

    .card {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
    }

  }
`;