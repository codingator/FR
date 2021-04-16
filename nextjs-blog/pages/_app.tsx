import { AppProps } from 'next/app'
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import '../styles/global.css'
import 'nprogress/nprogress.css'; //styles of nprogress

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}