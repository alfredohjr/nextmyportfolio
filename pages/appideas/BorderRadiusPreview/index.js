import React, {Component} from 'react';

import Layout from '../../../src/components/Layout';
import {Container} from '../../../styles/borderRadiusPreviewStyles';


export default class BorderRadiusPreview extends Component {

    constructor(props){
        super(props);
        this.state = {
            borderinput:0,
        }

        this.handleinputChange = this.handleinputChange.bind(this);
    }

    handleinputChange = (e) => {
        const {target} = e;
        const {name} = target;
        const {value} = target;

        this.setState({
            [name]: value
        })
    }

    render(){
        const {borderinput} = this.state;
        return(
            <Layout nameTitle="BorderRadiusPreview">
                <Container border={borderinput}>
                    <div className="col-9 col-s-11 project-main">
                        <h1>BorderRadiusPreview</h1>
                        <input 
                            type="range"
                            name="borderinput"
                            min={0}
                            max={50}
                            value={borderinput}
                            onChange={this.handleinputChange}    
                            />
                        <div className="square">
                            <p>border-radius:{borderinput}%;</p>
                        </div>
                    </div>
                </Container>
            </Layout>
        )
    }
}