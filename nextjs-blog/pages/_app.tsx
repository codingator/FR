import { AppProps } from 'next/app'
import Router from 'next/router';
import '../styles/global.css'

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}