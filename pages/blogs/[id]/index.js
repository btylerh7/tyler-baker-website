import Head from 'next/head'
import Main from '../../../components/Main'
import useSWR from 'swr'
import React from 'react'

export async function getServerSideProps(ctx) {
    const { id } = ctx.query;
    return {
      props: {
        id,
      },
    };
  }

function SingleBlog(props) {
    const fetcher = async (...args) => {
        const response = await fetch(...args)
        const data = await response.json()
        return data
    }
    const url = `https://blog-api-baker.herokuapp.com/blogs/${props.id}`
    const { data, error } = useSWR(url, fetcher)
    if (error) {
        return <div>Error: Something went wrong...</div>
    }
    if (!data) {
        return <div>Loading...</div>
    }
    return (
        <>
            <Head>
                <title>
                    {data.title}
                </title>
                    </Head>
            <Main>
                <h1>{data.title}</h1>
                <br />
                <p>{data.body}</p>
            </Main>
        </>
    )
}

export default SingleBlog