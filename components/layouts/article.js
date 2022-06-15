import Head from 'next/head';

const Layout = ({ children, title }) => {
    const t = `${title} - Qu1etboy`;
    return (
        <div>
            {title && (
                <Head>
                    <title>{t}</title>
                </Head>
            )}
            {children}
        </div>
    )
}

export default Layout;