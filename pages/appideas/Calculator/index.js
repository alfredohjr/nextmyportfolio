import React, {Component} from 'react';

import Layout from '../../../src/components/Layout';
import {Container} from './styles';

export default class Calculator extends Component {

    constructor(props){
        super(props);
        this.state = {
            result: ""
        }

        this.handleOnClick = this.handleOnClick.bind(this);
    }

    calcu(fn) {
        return new Function('return ' + fn)();
    }

    handleOnClick = (e) => {
        const {target} = e;
        const {name} = target;
        const {value} = target;
        const {result} = this.state;
        
        if (value === "=") {
            this.setState({result:this.calcu(result)});
        } else if (value === "C") {
            this.setState({result:""});
        } else {
            this.setState({result:result + value});
        }

    }

    render() {
        const {result} = this.state;
        return (
            <Layout nameTitle="Calculator">
                <Container>
                    <div className="project-main col-4 col-s-7">
                        <h1>Calculator</h1>
                        <input type="text" className="calculator-display" name="resu" value={result} />
                        <div className="calculator">
                            <input 
                                type="button"
                                name="reset"
                                value="C"
                                onClick={this.handleOnClick}
                                />
                            <input 
                                type="button"
                                name="posneg"
                                value="+/-"
                                className="display-none"
                                onClick={this.handleOnClick}
                                />
                            <input 
                                type="button"
                                name="percent"
                                value="%"
                                onClick={this.handleOnClick}
                                />
                            <input 
                                type="button"
                                name="div"
                                value="/"
                                onClick={this.handleOnClick}
                                />
                            <input 
                                type="button"
                                name="val7"
                                value={7}
                                onClick={this.handleOnClick}
                                />
                            <input 
                                type="button"
                                name="val8"
                                value={8}
                                onClick={this.handleOnClick}
                                />
                            <input 
                                type="button"
                                name="val9"
                                value={9}
                                onClick={this.handleOnClick}
                                />
                            <input 
                                type="button"
                                name="multi"
                                value="*"
                                onClick={this.handleOnClick}
                                />
                            <input 
                                type="button"
                                name="val4"
                                value={4}
                                onClick={this.handleOnClick}
                                />
                            <input 
                                type="button"
                                name="val5"
                                value={5}
                                onClick={this.handleOnClick}
                                />
                            <input 
                                type="button"
                                name="val6"
                                value={6}
                                onClick={this.handleOnClick}
                                />
                            <input 
                                type="button"
                                name="sub"
                                value="-"
                                onClick={this.handleOnClick}
                                />
                            <input 
                                type="button"
                                name="val1"
                                value={1}
                                onClick={this.handleOnClick}
                                />
                            <input 
                                type="button"
                                name="val2"
                                value={2}
                                onClick={this.handleOnClick}
                                />
                            <input 
                                type="button"
                                name="val3"
                                value={3}
                                onClick={this.handleOnClick}
                                />
                            <input 
                                type="button"
                                name="soma"
                                value="+"
                                onClick={this.handleOnClick}
                                />
                            <input 
                                type="button"
                                name="na"
                                value="na"
                                className="display-none"
                                onClick={this.handleOnClick}
                                />
                            <input 
                                type="button"
                                name="val0"
                                value={0}
                                onClick={this.handleOnClick}
                                />
                            <input 
                                type="button"
                                name="dot"
                                value="."
                                onClick={this.handleOnClick}
                                />
                            <input 
                                type="button"
                                name="equal"
                                value="="
                                onClick={this.handleOnClick}
                                />
                        </div>
                    </div>
                </Container>
            </Layout>
        )
    }
}