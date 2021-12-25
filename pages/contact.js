import Head from 'next/head'
import Main from '../components/Main'



function Contact() {
    return (
        <>
            <Head>
                <title>Contact</title>
            </Head>
            <Main>
                <h1>Contact Me</h1>
                <br />
                <p>If you have any inquirires, please reach out to me through one of the following methods:</p>
                <br />
                <div>
                    <p>email: <u>tylerhbaker99@gmail.com</u></p>
                </div>
            </Main>
        </>
    )
}

export default Contact
