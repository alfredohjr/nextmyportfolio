import React, {Component} from 'react';

import Layout from '../../../src/components/Layout';
import {Container, Lamp} from '../../../styles/christimasLightsStyles';

export default class ChristmasLights extends Component {

    constructor(props){
        super(props);
        this.state = {
            light:false,
            shadow:5,
            smoth:5
        }
    }

    handleInputChange = (e) => {
        const {target} = e;
        const {value,name} = target;

        this.setState({[name]:value});
    }

    render(){
        
        const {shadow, smoth} = this.state;

        return(
            <Layout nameTitle="ChristimasLights">
                <Container color="red">
                    <div className="col-9 col-s-11 project-main">
                        <h1>Christmas Lights</h1>
                    </div>

                    <div className="wall col-9 col-s-11">
                        <Lamp color="red" shadow={shadow} smoth={smoth}></Lamp>
                        <Lamp color="blue" shadow={shadow} smoth={smoth}></Lamp>
                        <Lamp color="yellow" shadow={shadow} smoth={smoth}></Lamp>
                        <Lamp color="red" shadow={shadow} smoth={smoth}></Lamp>
                        <Lamp color="blue" shadow={shadow} smoth={smoth}></Lamp>
                        <Lamp color="#b5b5b5" shadow={shadow} smoth={smoth}></Lamp>
                        <Lamp color="#aaaadd" shadow={shadow} smoth={smoth}></Lamp>
                        <Lamp color="#213566" shadow={shadow} smoth={smoth}></Lamp>
                        <Lamp color="#123456" shadow={shadow} smoth={smoth}></Lamp>
                        <Lamp color="#654321" shadow={shadow} smoth={smoth}></Lamp>
                    </div>

                    <div className="control col-9 col-s-11">
                        <p>shadow:
                            <input type="range" min="5" max="30" name="shadow" value={shadow} onChange={this.handleInputChange} />
                        </p>
                        <p>smoth:
                            <input type="range" min="5" max="30" name="smoth" value={smoth} onChange={this.handleInputChange}/>
                        </p>
                    </div>
                </Container>
            </Layout>
        )
    }
}