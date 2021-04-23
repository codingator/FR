import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import utilStyles from '../../../styles/utils.module.css'
import slugStyles from '../../../styles/slug.module.css'
import Layout from '../../../components/layout'
import PostTitle from '../../../components/post-title'
import PostHeader from '../../../components/post-header'
import PostBody from '../../../components/post-body'

export default function Post({ post, preNextPost }) {
    const router = useRouter()

    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />
    }
    return (
        <Layout title={post.title}>
            {router.isFallback ? (
                <PostTitle>Loading…</PostTitle>
            ) : (
                <>
                    <article className={slugStyles.articleBody}>
                        <Head>
                            <meta property="og:image" content={post.ogImage.url} />
                            <meta name="og:title" content={`DevZ | ${post.title}`} />
                        </Head>
                        <PostHeader
                            title={post.title}
                            coverImage={post.coverImage}
                            date={post.date}
                        />
                        <PostBody content={post.content} />
                        <MorePost>
                            {preNextPost.pre && (
                                <LeftCard
                                    postSlug={preNextPost.pre.slug}
                                    postTitle={preNextPost.pre.title}
                                />
                            )}
                            {preNextPost.next && (
                                <RightCard
                                    postSlug={preNextPost.next.slug}
                                    postTitle={preNextPost.next.title}
                                />
                            )}
                        </MorePost>
                    </article>
                </>
            )}
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const preNextPost = getPreNextPostBySlug(params.slug, [
        'title',
        'date',
        'slug'
    ])
    const post = getPostBySlug(params.slug, [
        'title',
        'date',
        'slug',
        'content',
        'ogImage',
        'coverImage'
    ])
    const content = await markdownToHtml(post.content || '')

    return {
        props: {
            post: {
                ...post,
                content,
            },
            preNextPost: {
                ...preNextPost
            }
        },
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = getAllPosts(['slug'])

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug,
                    date: post.date
                },
            }
        }),
        fallback: false,
    }
}