import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import BackgroundImage from 'gatsby-background-image'
import Img from "gatsby-image/withIEPolyfill"
import { SocialIcon } from 'react-social-icons';

import Layout from '../components/layout'
import Header from '../components/header'

import '../styles/index.scss' 
import '../styles/about.scss' 
import '../styles/contact.scss' 


const HomePageScaffolding = (props: any) => (
  <Layout>
    <div className="home-page">
      <Header />
      <BackgroundImage className="landing-image hero is-fullheight"
        fluid={props.content.landingImage.fluid} alt="background-image">
        <div className="hero-body has-text-centered">
          <div className="container">
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
    <section className="section about-page" id="about">
      <h1 className="title has-text-centered has-text-primary is-size-2 is-size-3-mobile is-uppercase">
        {props.content.aboutSection.title}
      </h1>
      <div className="columns">
        <div className="column">
          <div className="section">
            {documentToReactComponents(props.content.aboutSection.description.json)}
          </div>
        </div>
        <div className="column">
          <div className="section">
            <figure className="image">
              <Img fluid={props.content.aboutSection.photo.fluid} alt="about-us-photo" />
            </figure>
          </div>
        </div>
      </div>  
    </section>
    <section className="hero is-info contact-page" id="contact">
      <div className="hero-body has-text-centered">
        <div className="container">
          <h1 className="title has-text-centered has-text-primary is-size-2 is-size-3-mobile is-uppercase">
            {props.content.contactSection.title}
          </h1>
            <span className="is-size-5 is-size-6-mobile has-text-grey-dark">
              {documentToReactComponents(props.content.contactSection.description.json)}
            </span>
            <div className="field">
              { (props.content.contactSection.socialLinks).map( (link: any, i: number) =>
                (<SocialIcon key={i} url={link} target="_blank" rel="noopener noreferrer" bgColor="#421E28" style={{ height: 60, width: 60 }} />) )
              }
            </div>
        </div>
      </div>
    </section>
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
          aboutSection {
            title
            description {
              json
            }
            photo {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
          }
          contactSection {
            title
            description {
              json
            }
            socialLinks
          }
        }
      }
    `}
  render = {data => (<HomePageScaffolding content={data.contentfulHomePage} />)}
  />
);

export default HomePage
