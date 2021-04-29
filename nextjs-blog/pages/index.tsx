import React from "react"
import utilStyles from '../styles/utils.module.css'
import indexStyle from '../styles/index.module.css'
import Layout from '../components/layout'

import dynamic from 'next/dynamic'
// const Roulette = dynamic(() => import('../components/roulette-wheel'), { ssr: false })
// const FavoriteWorldCup = dynamic(() => import('../components/favorite-worldcup'), { ssr: false })
const Ladder = dynamic(() => import('../components/ladder'), {
  ssr: false,
  loading: () => <p>Loading...</p>
})

export default class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      details: true
    }
  }

  showDetails() {
    this.setState({ details: false })
  }

  render() {
    const { details } = this.state

    return (
      <Layout title="Web Developer's">
        <section className={`${indexStyle.intro} ${utilStyles.headingMd}`}>
          <h2>제 블로그에 오신 것을 환영합니다.</h2>
          <p>
            백엔드 개발이 넘무 재밌
            </p>
        </section>
        <section className={`${indexStyle.intro} ${indexStyle.tabs} ${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          {/* <Roulette /> */}
          {/* <FavoriteWorldCup /> */}
          {details ? (
            <button onClick={() => this.showDetails()}>CLICK ME</button>
          ) : (
            <Ladder

            />
          )}
        </section>
      </Layout>
    )
  }
}