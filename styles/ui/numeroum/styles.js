import styled from 'styled-components';

export const Container = styled.div`

    .main {
        width: 700px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 50px;
        position: relative;
        font-family: 'Quicksand', sans-serif;
        color: white;
    }

    img {
        width: 100%;
        position: absolute;
    }

    .imgblur {
        filter: blur(5px);
        /* position: fixed; */
    }

    .imgnormal {
        position: absolute;
        clip-path: circle(35% at 0 50%);
    }
    
    .imgnormal:hover {
        /* clip-path: circle(35% at 0 50%); */
    }
    
    .bordernormal {
        margin-left: -34%;
        margin-top: 15px;
        width: 480px;
        height: 480px;
        position: absolute;
        border: solid white 1px;
        border-radius: 50%;
        /* border-left-color: transparent; */
        /* border-bottom-color: transparent; */
        transform: rotate(45deg);
        overflow: hidden;
    }

    .bordernormal-2 {
        margin-left: -35%;
        margin-top: -1%;
        width: 520px;
        height: 520px;
        position: absolute;
        border: solid white 3px;
        border-radius: 50%;
        /* border-left-color: transparent; */
        /* border-bottom-color: transparent; */
        transform: rotate(45deg);
        overflow: hidden;
    }

    [class^='fi-'] {
        position: absolute;
        color: black;
        padding: 10px;
        border-radius: 50%;
        background-color: white;
    }

    .fi-1 {
        margin-left: 250px;
        margin-top: 200px;
    }

    .fi-2 {
        margin-left: 210px;
        margin-top: 90px;
    }

    .fi-3 {
        margin-left: 225px;
        margin-top: 340px;
    }

    .fi-4 {
        margin-left: 135px;
        margin-top: 10px;
    }

    .fi-5 {
        margin-left: 135px;
        margin-top: 450px;
    }

    
    .title {
        margin-top: 130px;
        font-size: 25px;
        position: absolute;
        padding-left: 5px;
    }
    
    [class^='sep-'] {
        position: absolute;
        border: 1px solid white;
        width: 190px;
    }

    .sep-1 {
        margin-top:160px;
        padding-left: 5px;
    }

    .sub-title {
        margin-top: 165px;
        font-size: 45px;
        position: absolute;
        padding-left: 5px;
    }

    .sep-2 {
        width: 205px;
        margin-top: 230px
    }

    .date-now-week {
        margin-top: 235px;
        position: absolute;
        padding-left: 5px;
        font-size: 18px;
    }

    .date-now {
        margin-top: 260px;
        position: absolute;
        padding-left: 5px;
        font-size: 18px;
    }

    .sep-3 {
        margin-top: 290px;
    }

    .temperature {
        margin-top: 300px;
        font-size: 30px;
        position: absolute;
    }

    .sun {
        margin-top: 307px;
        margin-left: 60px;
        position: absolute;
    }

    [class^='icon-'] {
        position: absolute;
        font-size: 20px;
        
    }

    .icon-info {
        margin-left: 195px;
        margin-top: 15px;
    }

    .icon-social {
        margin-left: 270px;
        margin-top: 100px;
    }

    .icon-awards {
        margin-left: 310px;
        margin-top: 212px;
    }

    .icon-location {
        margin-left: 285px;
        margin-top: 355px;
    }

    .infos {
        width: 470px;
        height: 100px;
        margin-left: 760px;
        margin-top: 180px;
        position: absolute;
        background: black;
        color: white;
        transform: rotate(90deg);
        font-family: 'Quicksand', sans-serif;
        padding: 10px;
    }

    .info-title {
        font-size: 35px;
    }

    .info-tech {

    }

    `;