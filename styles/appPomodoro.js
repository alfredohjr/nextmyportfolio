import styled from 'styled-components';

export const Container = styled.div`

    .main {
        width: 100%;
        min-height: 50vh;
        background: white;
        /* position: relative; */
        /* overflow: hidden; */
    }

    .main-tomato {
        width: 300px;
        height: 300px;
        margin-left: auto;
        margin-right: auto;
        /* background: yellow; */
        /* position: relative; */
        /* z-index:-2; */
    }
    
    .timer {
        width: 300px;
        /* margin-top: ; */
        background: white;
        position: absolute;
        z-index:9;
    }
    
    .tomato {
        fill: tomato;
        position: absolute;
        /* z-index:-1; */
    }

    .main-menu {
        width: 100%;
        margin-top: 5px;
        position: relative;
        float: right;
        text-align: center;
    }

    .menu-timer, .menu-pause, .menu-ss {
        margin-top: 5px;
        display: flex;
        flex-direction: row;
        
        button {
            color: white;
            margin: 3px;
        }
    }

    button {
        background: tomato;
        /* opacity: 1; */
        /* display: flex; */
        align-items: center;
        padding-left: 0;
    }

    button:hover {
        /* opacity: .9; */
    }

    button:disabled {
        opacity: .7;
    }

    .menu-timer {

        button {
            width: 25%;
        }
    }

    .menu-pause {

        button {
            width: 50%;
        }
    }

    .menu-ss {

        button {
            max-width: 50%;
        }
    }

    .tomato-count {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: end;

        div {
            padding: 2px;
        }
    }

    .tomato-info {
        display: none;
        position: absolute;
        margin-top: -115px;
        color: tomato;
        padding: 3px;
        border-radius: 3px;
        // opacity: .8;
        text-align: left;
    }

    .tomato-icon:hover + .tomato-info {
        display: block;
        z-index:99;
        background: black;
        color: white;
        opacity: .8;
        padding: 5px;
    }
`; 