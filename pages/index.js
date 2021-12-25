import homeStyles from '../styles/Home.module.css'
import mainStyles from '../styles/Main.module.css'
import { FaBars } from "react-icons/fa";
import Head from 'next/head'
import Main from '../components/Main';
import Btn from '../components/Btn'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Main>
        <header>
          <h1>Building an experience.</h1>
          <br/>
          <h2>Tyler Baker</h2>
          <p> <span className={mainStyles.darkText}>Music Educator | Music Producer | Programmer</span></p>
        </header>
        <br />
        <br />
        <section>
          <p>I offer services in all of these areas. Want to see more of my work? Click the button below to see my portfolio!</p>
          <Btn />
        </section>
      </Main>
    </>
  )
}
