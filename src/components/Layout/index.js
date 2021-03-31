import Html from 'next/document';
import Head from 'next/head';

import styles from './style.module.css';

import Menu from '../Menu';
import AnimationBG from '../AnimationBG';

export default function Layout({ nameTitle, hiddenPosition, children }) {
    return (
        <>
            <Head>
                <title>{nameTitle}</title>
                
                <meta httpEquiv="Content-Language" content="pt-br"></meta>

                <meta name="theme-color" content="rgb(0,0,0)" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Cormorant+Unicase:wght@700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,300&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,100&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap" rel="stylesheet" />

                <script src="https://www.google.com/recaptcha/api.js"></script>

                <script async src="https://www.googletagmanager.com/gtag/js?id=G-QDGFW7941X"></script>
                
                
                <script
                    dangerouslySetInnerHTML={{
                        __html: `window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments)};
                    gtag('js', new Date());

                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TOKEN}');
                    `}}
                />
            
            </Head>

            
            <div className={styles.portfolio_main}>
                <Menu />
                {/* <AnimationBG hiddenPosition={hiddenPosition} /> */}
                {children}
            </div>
        </>
    )
  }