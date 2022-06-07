import Head from 'next/head';

import Layout from '../../../src/components/Layout';

import { Container } from '../../../styles/ui/numeroum/styles';

import { FiAward, FiAtSign, FiMapPin, FiPaperclip, FiSun } from 'react-icons/fi';

export default function Numeroum() {
    return (
        <Layout>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap" rel="stylesheet" />
            </Head>
            <Container>
                <div className="main">
                    <img className="imgblur" src="https://i.pinimg.com/564x/aa/6f/4e/aa6f4e76a0056f6d47e78c86e91b6d69.jpg" />
                    <img className="imgnormal" src="https://i.pinimg.com/564x/aa/6f/4e/aa6f4e76a0056f6d47e78c86e91b6d69.jpg" />
                    <div className="bordernormal"></div>
                    <div className="bordernormal-2"></div>

                    <FiPaperclip className="fi-4" size={50} />
                    <p className="icon-info">Informações</p>
                    <FiAtSign className="fi-2" size={50} />
                    <p className="icon-social">Social</p>
                    <FiAward className="fi-1" size={50} />
                    <p className="icon-awards">Premios</p>
                    <FiMapPin className="fi-3" size={50} />
                    <p className="icon-location">Localização</p>

                    <p className="title">Rio de Janeiro</p>
                    <hr className="sep-1" />
                    <p className="sub-title">Brasil</p>
                    <hr className="sep-2" />
                    <p className="date-now-week">Quinta-feira</p>
                    <p className="date-now">Abril 22, 2021</p>
                    <hr className="sep-3" />
                    <p className="temperature">22º</p>
                    <FiSun className="sun" size={30} />
                </div>

                <div className="infos">
                    <p className="info-title">Estudo com css puro</p>
                    <p className="info-techs">Techs: Nextjs, CSS e JavaScript</p>
                </div>
            </Container>
        </Layout>
    )
}