import styled from 'styled-components';

export const Item = styled.div`
    
`;

export const Container = styled.div`

    min-height: 80vh;
    margin-bottom: 5px;
    
    .project-main {
        margin-left: auto;
        margin-right: auto;
        text-align: center;
    }
    
    h1 {
        color: white;
    }

    .profiles {
        display: grid;
        grid-template-columns: repeat(1,1fr);
        grid-gap: 5px;
    }

    .profiles ul {
        list-style-type: none;
    }

    .profile-item {
        background-color: #4d9de0;
        padding: 10px;
        margin-top: 10px;

        &:hover {
            opacity: 90%;
        }
    }

    .name {
        color: white;
        font-size: 35px;
    }

    .age {
        color: white;
        font-size: 12px;
    }

    .desc {
        color: white;
        font-size: 15px;
    }

    .more {
        padding: 2px;
        font-size: 55px;
        color: white;
        background-color: #4d9de0;
        border: none;
    }
`;