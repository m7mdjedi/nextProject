import Layout from '../components/Layout'
import type { AppProps } from "next/app";
import '../styles/globals.css'
import { Fragment } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  return <Fragment><Layout/>
  <Component {...pageProps} /></Fragment>
}
