import React from 'react'

import Layout from '../components/layout'
import { StaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import '../styles/index.scss' 


const HomePageScaffolding = (props: any) => (
  <Layout>
    <BackgroundImage className="landing-image hero is-fullheight"
        fluid={props.content.landingImage.fluid} alt="background-image">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-size-1 has-text-white is-spaced">
                {props.content.title}
            </h1>
          </div>
        </div>
    </BackgroundImage>
  </Layout>
)

const HomePage = () => (
  <StaticQuery 
  query={graphql`
      query {
        contentfulHomePage {
          title
          landingImage {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    `}
  render = {data => (<HomePageScaffolding content={data.contentfulHomePage} />)}
  />
);

export default HomePage
