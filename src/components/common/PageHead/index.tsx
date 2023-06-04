import AppConfig from '@/constants/app.constant';
import Head from 'next/head';

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
            <meta name="keywords" content={`linkzen, links, bookmark-alternative, bookmark, store links, organize links, manage links, shorten url`} />
            <meta name="author" content={author || "Kelvin, Cypher Moon, Seun Fashina"} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImageUrl} />
            <meta property="og:url" content={AppConfig.siteUrl} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:title" content={title} />
            <meta property="twitter:url" content={AppConfig.siteUrl} />
            <meta name="twitter:image" content={ogImageUrl} />

            <meta name="robots" content="index, follow" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

export default PageHead;
