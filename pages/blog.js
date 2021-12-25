import Head from 'next/head'
import Main from '../components/Main'
import Link from 'next/link'
import blogStyles from '../styles/Blog.module.css'
import useSWR from 'swr'
import React from 'react'

function Blog() {
    const fetcher = async (...args) => {
        const response = await fetch(...args)
        const data = await response.json()
        return data
    }
    let url = 'https://blog-api-baker.herokuapp.com/blogs'
    let content = 'loading...'
    const { data, error } = useSWR(url, fetcher)
    if(error) return <div>Error: an error happened</div>
    if(!data) return <div>Loading</div>
    if(typeof(data) !== 'object') return <div>Data not defined</div>
    if(data.length <= 1) return <div>Not an array</div>
    if(data) {
        content = data.map(element => {
            let url = `/blogs/${element._id}`
            return (
                <div className={blogStyles.card} key={element._id}>
                    <Link href={url}><h2 className={blogStyles.titleLink}>{element.title}</h2></Link>
                    <p>Created: {new Date (element.createdAt).toDateString()}</p>
                    <p>{element.description}</p>

                </div>
            )
    })}
    return (
        <>
            <Head>
                <title>
                    All Blogs
                </title>
            </Head>
            <Main>
                {content}
            </Main>
        </>
    )
    return <div>Loading</div>
}
export default Blog

