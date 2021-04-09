import React, {Component} from 'react';

import Layout from '../../../src/components/Layout';
import {Container} from './styles';

export default class Bin2Dec extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bininput: "",
            decresult: ""
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }


    handleSubmit = (e) => {
        e.preventDefault();

        const {bininput} = this.state;
        const dr = parseInt(bininput,2);
        
        console.log(dr);
        if(dr){
            this.setState({decresult:dr});
        } else {
            this.setState({decresult:"0"});
        }

    }

    handleInputChange = (e) => {
        const {target} = e;
        const {name} = target;
        const {value} = target;

        this.setState({
            [name]: value
        })

    }

    render() {
        const {bininput,decresult} = this.state;
        return(
            <Layout nameTitle="Bin2Dec">
                <Container>
                    <div className="project-main col-9 col-s-11">
                        <h1>Bin2Dec convert</h1>
                        <form onSubmit={this.handleSubmit}>
                            <input 
                                type="text" 
                                value={bininput}
                                name="bininput"
                                onChange={this.handleInputChange}
                                /><br />
                            <input 
                                type="text" 
                                value={decresult}
                                name="decresult"
                                onChange={this.handleInputChange}
                                /><br />
                            <input type="submit" value="Converter"/>
                        </form>
                    </div>
                </Container>
            </Layout>
        )
    }
}