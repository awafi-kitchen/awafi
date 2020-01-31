import React from 'react'

import Layout from '../components/layout'
import { StaticQuery, graphql } from 'gatsby'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import BackgroundImage from 'gatsby-background-image'
import Img from "gatsby-image/withIEPolyfill"

import '../styles/index.scss' 
import Header from '../components/header'


const HomePageScaffolding = (props: any) => (
  <Layout>
    <div className="home-page">
      <Header />
      <BackgroundImage className="landing-image hero is-fullheight"
        fluid={props.content.landingImage.fluid} alt="background-image">
        <div className="hero-body has-text-centered">
          <div className="container">
            <h1 className="title arabic is-size-2 is-size-3-mobile has-text-white is-uppercase">
              {documentToReactComponents(props.content.arabicSubtitle.json)}
            </h1>
              <br />
            <figure className="image awafi-logo">
              <Img fluid={props.content.logo.fluid} alt="awafi-logo" />
            </figure>
              <br />
            <h1 className="title is-size-3 is-size-4-mobile has-text-white is-uppercase">
              {documentToReactComponents(props.content.englishSubtitle.json)}
            </h1>
            
          </div>
          <AnchorLink href="#about" className="is-overlay">
            <figure className="image is-32x32">
              <img className="img-centered" src={require("../images/down-arrow.png")} alt="" />
            </figure>
          </AnchorLink>
        </div>
      </BackgroundImage>
    </div>
  </Layout>
)

const HomePage = () => (
  <StaticQuery 
  query={graphql`
      query {
        contentfulHomePage {
          title
          englishSubtitle {
            json
          }
          arabicSubtitle {
            json
          }
          landingImage {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          logo {
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
