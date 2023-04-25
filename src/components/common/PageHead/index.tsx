import Head from 'next/head'
import React from 'react'

interface Props {
    title: string,
    description?: string,
    author?: string,
    ogImage?: string,
}

const PageHead = ({ title, description, author, ogImage }: Props) => {
    const ogImageUrl = ogImage || '/images/og-image.png';

    return (
        <Head>
            <title>{title}</title>
            {description && <meta name="description" content={description} />}

            <meta name="keywords" content={`linkzen, links, bookmark-alternative, bookmark, store links, organize links`} />
            <meta name="author" content={author} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImageUrl} />
            <meta name="robots" content="index, follow" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

export default PageHead;
