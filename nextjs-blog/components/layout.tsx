import Head from 'next/head'
import styles from './layout.module.css'
import Meta from '../components/meta'
import Header from '../components/header'

export const siteTitle = 'DevZ'

export default function Layout({
    children,
    title,
    interactive
}: {
    children: React.ReactNode
    title: string
    interactive?: boolean
}) {
    if (interactive) {
        return (
            <>
                <Meta />
                <Head>
                    <title>{title} | {siteTitle}</title>
                </Head>
                <main>{children}</main>
            </>
        )
    }
    return (
        <>
            <Meta />
            <Head>
                <title>{title} | {siteTitle}</title>
            </Head>
            <div className={styles.container}>
                <header className={styles.header}>
                    <Header />
                </header>
                <main>{children}</main>
            </div>
        </>
    )
}