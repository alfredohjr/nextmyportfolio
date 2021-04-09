import React, {Component} from 'react';

import Layout from '../../../src/components/Layout';
import {Container} from '../../../styles/csv2jsonStyles';

export default class Csv2Json extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <Layout nameTitle="Csv2Json">
                <Container>
                    <div className="project-main col-9 col-s-11">
                        <h1>Convert CSV to JSON</h1>
                        <div className="input-data">
                            <textarea className="textarea col-12 col-s-11"></textarea>
                            <input className="button col-5 col-s-11" type="button" value="Converter" />
                            <input className="button col-5 col-s-11" type="button" value="Download" />
                            <textarea className="textarea col-12 col-s-11"></textarea>
                        </div>
                    </div>
                </Container>
            </Layout>
        )
    }
}