import React from 'react'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout metadata={{pageTitle:"Page Not Found"}}>
    <div className="hero is-info is-fullheight">
      <div className="hero-body has-text-centered">
        <div className="container">
          <h1 className="title has-text-primary">NOT FOUND</h1>
          <p className="subtitle">You just found a page that doesn&#39;t exist... the sadness.</p>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
