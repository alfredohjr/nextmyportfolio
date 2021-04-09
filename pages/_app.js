import App from 'next/app';

import '../styles/globals.css'

class MyApp extends App { //({ Component, pageProps }) {
  render() {
      const {Component, pageProps} = this.props;
      return <Component {...pageProps} />;
  }
    //return <Component {...pageProps} />
}

export default MyApp
