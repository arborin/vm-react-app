import React, { Component } from 'react'
import Layout from './Layout/Layout'
import Quiz from './containers/Quiz/Quiz'

export default class App extends Component {
  render() {
    return (
      <Layout>
        <Quiz />
      </Layout>
    )
  }
}
