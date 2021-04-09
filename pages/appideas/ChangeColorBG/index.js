import React, {Component} from 'react';

import Layout from '../../../src/components/Layout';
import {Container} from '../../../styles/changeColorBGStyles';

export default class ChangeColorBG extends Component {


    render(){
        return(
            <Layout nameTitle="ChangeColorBG">
                <Container>
                    <div className="project-main col-9 col-s-11">
                        <h1>Change color BG</h1>
                        <div className="box">

                        </div>
                    </div>
                </Container>
            </Layout>
        )
    }

}