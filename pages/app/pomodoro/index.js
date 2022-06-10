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
            tomatoCount:[],
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

    componentDidMount() {
        if(localStorage.getItem('tomatos')) {
            const tomatos = JSON.parse(localStorage.getItem('tomatos'));
            this.setState({tomatoCount:tomatos});
        }
    };

    componentDidUpdate(prevProps) {
        if(prevProps.tomatoCount !== this.state.tomatoCount) {
            const tomatos = this.state.tomatoCount;
            localStorage.setItem('tomatos',JSON.stringify(tomatos));
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
                const tomatoNow = ((sleepMiliseconds/1000)*tomatoSize)/60;

                var dStart = new Date();
                var dEnd = new Date();
                dEnd.setMinutes(dEnd.getMinutes() + tomatoNow);

                dStart = `${dStart.getDate()}/${dStart.getMonth()}/${dStart.getFullYear()} ${dStart.getHours()}:${String(dStart.getMinutes()).padStart(2,'0')}`;
                dEnd = `${dEnd.getDate()}/${dEnd.getMonth()}/${dEnd.getFullYear()} ${dEnd.getHours()}:${String(dEnd.getMinutes()).padStart(2,'0')}`;

                this.setState(
                    {tomatoCount:[...tomatoCount
                        ,{size:tomatoNow,startedAt:Date(),startedAtFormated:dStart,finishedAtFormated:dEnd}
                    ]});
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

    handleApagar = (e) => {
        localStorage.removeItem('tomatos');
        this.setState({tomatoCount:[]});
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
                                {tomatoCount.map((e) =>(
                                    <div key={e.startedAt}>
                                        <GiTomato 
                                            className="tomato-icon" 
                                            size={e.size} 
                                            color={"tomato"}/>
                                        <div className="tomato-info">
                                            <div>Inicio: {e.startedAtFormated}</div>
                                            <div>Término: {e.finishedAtFormated}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className='menu-timer'>
                                <input name="size" size={5} type="range" min="1" max="300" onChange={this.handleInputChange}/>
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
                                <button value="apagar" onClick={this.handleApagar}>Recomeçar</button>
                            </div>
                        </div>
                    </div>
                </Container>
            </ Layout>
        )
    }
}