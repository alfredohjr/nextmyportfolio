import React, {Component} from 'react';

import Layout from '../../../src/components/Layout';
import {Container} from './styles';

export default class CountdownTimer extends Component {

    constructor(props){
        super(props);
        this.state = {
            day:0,
            hour:0,
            minute:0,
            second:0,
            inputDate:""
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange = (e) => {
        const {name,value} = e.target;
        this.setState({[name]:value});
        setInterval(this.changeTimer,1000);
    }

    changeTimer = (e) => {
        const {inputDate} = this.state;
        const date1 = new Date();
        const date2 = new Date(inputDate);
        const difDate = date2.getTime() - date1.getTime();
        
        const difDays = Math.floor(difDate / (1000 * 60 * 60 * 24));
        const difHour = Math.floor((difDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const difMinute = Math.floor((difDate % (1000 * 60 * 60)) / (1000 * 60));
        const difSecond = Math.floor((difDate % (1000 * 60)) / 1000);

        if (difDays + difHour + difMinute + difSecond >= 0){
            this.setState({day:difDays,hour:difHour,minute:difMinute,second:difSecond});
        }
    }



    render() {
        const {day, minute, hour, second, inputDate} = this.state;
        return(
            <Layout nameTitle="CountdownTimer">
                <Container>
                    <div className="project-main col-9 col-s-11">
                        <h1>Countdown Timer</h1>
                        <div className="clock">
                            <input className="set-date" type="date" name="inputDate" value={inputDate} onChange={this.handleInputChange}></input>
                            <div className="title-main">
                                <div className="titles">
                                    <p className="day">{day}</p>
                                    <p className="hour">{hour}</p>
                                    <p className="minute">{minute}</p>
                                    <p className="second">{second}</p>
                                </div>
                                <div className="titles">
                                    <p className="day">Day</p>
                                    <p className="hour">Hour</p>
                                    <p className="minute">Minute</p>
                                    <p className="second">Second</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Layout>
        )
    }
}