import React from "react"
import utilStyles from '../styles/utils.module.css'
import Layout from '../components/layout'
import { fetchAndSetData } from '../lib/food-api'

import dynamic from 'next/dynamic'
const FoodData = dynamic(() => import('../components/food-data'), {
  ssr: false,
  loading: () => <p>Loading...</p>
})

export default class DataEdit extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      details: false,
      SSS: [],
      receivedData: false
    }
  }

  // componentDidMount() {

  // }

  // componentDidUpdate() {

  // }

  getData() {
    this.setState({ details: true })
    fetchAndSetData(1, 5)
      .then(res => {
        this.setState({
          receivedData: true,
          SSS: res
        })
      })
  }

  render() {
    const { details, SSS, receivedData } = this.state
    
    return (
      <Layout title="Web Developer's">
        <section>
          <h2>에디터</h2>
        </section>
        <section>
          <div>
          </div>
          <button onClick={() => this.getData()}>CLICK ME</button>
          {details ? (
            <>
              {receivedData ? (
                <FoodData
                  allFoodsData={SSS}
                />
              ) : (
                <p>Data Fetching...</p>
              )}
            </>
          ) : (
            <p>Empty</p>
          )}
        </section>
      </Layout >
    )
  }
}