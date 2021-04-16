import { GetStaticProps } from 'next'
import { getSortedPostsData } from '../lib/posts'
import { getSortedInteractivesData } from '../lib/interactives'
import utilStyles from '../styles/utils.module.css'
import indexStyle from '../styles/index.module.css'
import Layout from '../components/layout'

import dynamic from 'next/dynamic';
const HTabs = dynamic(() => import('../components/home-tabs'), { ssr: false });

export default function Home({
  allPostsData,
  allInteractivesData
}: {
  allPostsData: {
    coverImage: string
    excerpt: string
    title: string
    slug: string
    date: string
  }[]
  allInteractivesData: {
    coverImage: string
    excerpt: string
    title: string
    slug: string
    date: string
  }[]
}) {
  return (
    <Layout title="Web Developer's">
      <section className={`${indexStyle.intro} ${utilStyles.headingMd}`}>
        <h2>제 블로그에 오신 것을 환영합니다.</h2>
        <p>
          백엔드 개발이 넘무 재밌
        </p>
      </section>
      <section className={`${indexStyle.intro} ${indexStyle.tabs} ${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <HTabs allPostsData={allPostsData} allInteractivesData={allInteractivesData}/>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  const allInteractivesData = getSortedInteractivesData()
  return {
    props: {
      allPostsData,
      allInteractivesData
    }
  }
}
