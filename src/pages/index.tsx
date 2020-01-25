import React from 'react'

import Layout from '../components/layout'
import { StaticQuery, graphql } from 'gatsby'

import '../styles/index.scss' 


const HomePageScaffolding = (content: any) => (
  <Layout>
    <h1>{content.title}</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </Layout>
)

const HomePage = () => (
  <StaticQuery 
  query={graphql`
      query {
        contentfulHomePage {
          title
          landingImage {
            file {
              url
            }
          }
        }
      }
    `}
  render = {data => (<HomePageScaffolding content={data.contentfulHomePage} />)}
  />
);

export default HomePage
