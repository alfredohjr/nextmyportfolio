import React, {Component} from 'react';
import {GiTomato} from 'react-icons/gi';

import Layout from '../../../src/components/Layout';
import {Container} from '../../../styles/appPomodoro';

export default class Pomodoro extends Component {

    constructor(props){
        super(props);
        this.state = {
            size:1,
            startDisabled:false,
            tomatoSize:300,
            tomatoCount:0,
            sleepMiliseconds: 3000,
            timerPomodoroDisabled:{
                "15":true,
                "25":false,
                "35":false,
                "45":false,
                "5":false,
                "10":false,
            }
        }
    }

    handleInputChange = (e) => {
        const {target} = e;
        const {value, name} = target;
        this.setState({[name]:parseInt(value)});
    }

    timer = (e) => {
        const {size, tomatoSize, tomatoCount, sleepMiliseconds} = this.state;

        this.setState({size:size+1});
        
        if(parseInt(size) >= tomatoSize) {
            clearInterval(this.startTimer);
            this.setState({startDisabled:false});
            this.setState({size:1});

            if(sleepMiliseconds > 2000) {
                this.setState({tomatoCount:tomatoCount+1});
            }
        }


    }

    handleStartStop = (e) => {
        const {target} = e;
        const {value} = target;

        const {sleepMiliseconds} = this.state;

        if (value === 'start') {
            this.startTimer = setInterval(this.timer,sleepMiliseconds);
            this.setState({startDisabled:true})
        } else {
            clearInterval(this.startTimer);
            this.setState({startDisabled:false})

        }

    }

    handleTimePomodoro = (e) => {
        const {target} = e;
        const {value} = target;
        const {timerPomodoroDisabled, tomatoSize, tomatoCount} = this.state;
        
        let tmptimerPomodoroDisabled = {};
        for(var t in timerPomodoroDisabled) {
            if(value === t) {
                tmptimerPomodoroDisabled[t] = true;

                const timer = ((parseInt(t) * 60) / tomatoSize) * 1000;
                clearInterval(this.startTimer);
                this.setState({sleepMiliseconds:timer});
                this.setState({size:1});
                this.setState({startDisabled:false});
                
            } else {
                tmptimerPomodoroDisabled[t] = false;
            }

            this.setState({timerPomodoroDisabled:tmptimerPomodoroDisabled});
        }

    }


    render() {

        const {size, startDisabled, tomatoSize, timerPomodoroDisabled, tomatoCount} = this.state;

        return(
            <Layout nameTitle="Pomodoro">
                <Container>
                    <div className='main'>
                        <div className='main-tomato'>
                            <div className='timer' style={{height:`${size}px`}}></div>
                            <GiTomato className='tomato' size={tomatoSize}/>
                        </div>
                        <div className='main-menu'>
                            <div className="tomato-count">
                                {[...Array(tomatoCount)].map((e,i) =>(
                                    <div key={i}>
                                        <GiTomato color="tomato"/>
                                    </div>
                                ))}
                            </div>
                            <div className='menu-timer'>
                                <button value="15" onClick={this.handleTimePomodoro} disabled={timerPomodoroDisabled["15"]}>15 Min</button>
                                <button value="25" onClick={this.handleTimePomodoro} disabled={timerPomodoroDisabled["25"]}>25 Min</button>
                                <button value="35" onClick={this.handleTimePomodoro} disabled={timerPomodoroDisabled["35"]}>35 Min</button>
                                <button value="45" onClick={this.handleTimePomodoro} disabled={timerPomodoroDisabled["45"]}>45 Min</button>
                            </div>
                            <div className='menu-pause'>
                                <button value="5" onClick={this.handleTimePomodoro} disabled={timerPomodoroDisabled["5"]}>5 Min</button>
                                <button value="10" onClick={this.handleTimePomodoro} disabled={timerPomodoroDisabled["10"]}>10 Min</button>
                            </div>
                            <div className='menu-ss'>
                                <button value="start" onClick={this.handleStartStop} disabled={startDisabled}>Começar</button>
                                <button value="stop" onClick={this.handleStartStop} disabled={!startDisabled}>Parar</button>
                            </div>
                        </div>
                    </div>
                </Container>
            </ Layout>
        )
    }
}