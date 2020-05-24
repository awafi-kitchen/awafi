import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import AnchorLink from "react-anchor-link-smooth-scroll";
import BackgroundImage from "gatsby-background-image";
import Img from "gatsby-image/withIEPolyfill";
import { SocialIcon } from "react-social-icons";

import Layout from "../components/layout";

import "../styles/index.scss";
import "../styles/about.scss";
import "../styles/contact.scss";

const TINYLETTER_URL = "https://tinyletter.com/theawafikitchen";

const ListservSubscribe = () => (
  <form
    className="field has-addons has-addons-centered is-expanded"
    action={TINYLETTER_URL}
    method="post"
    target="popupwindow"
  >
    <div className="control">
      <input type="text" name="email" id="tlemail" className="input" />
    </div>
    <input type="hidden" value="1" name="embed" />
    <div className="control">
      <input
        type="submit"
        value="Subscribe"
        className="button is-primary is-uppercase"
      />
    </div>
  </form>
);

const HomePage = () => {

  const { contentfulHomePage } = useStaticQuery(graphql`
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
  `);
  
  return (
    <Layout>
      <div className="home-page">
        <BackgroundImage
          className="landing-image hero is-fullheight"
          fluid={contentfulHomePage.landingImage.fluid}
          alt="background-image"
        >
          <div className="hero-body has-text-centered">
            <div className="container">
              <figure className="image awafi-logo">
                <Img fluid={contentfulHomePage.logo.fluid} alt="awafi-logo" />
              </figure>
              <br />
              <span className="title is-size-3 is-size-4-mobile has-text-white has-text-weight-semibold is-uppercase">
                {documentToReactComponents(
                  contentfulHomePage.englishSubtitle.json
                )}
              </span>
            </div>
            <AnchorLink href="#about" className="is-overlay">
              <figure className="image is-32x32">
                <img
                  className="img-centered"
                  src={require("../images/down-arrow.png")}
                  alt=""
                />
              </figure>
            </AnchorLink>
          </div>
        </BackgroundImage>
      </div>

      <section className="section about-page" id="about">
        <h1 className="title has-text-centered has-text-primary is-size-2 is-size-3-mobile is-uppercase">
          {contentfulHomePage.aboutSection.title}
        </h1>
        <div className="columns">
          <div className="column">
            <div className="section">
              {documentToReactComponents(
                contentfulHomePage.aboutSection.description.json
              )}
            </div>
          </div>
          <div className="column is-hidden-mobile">
            <div className="section">
              <figure className="image">
                <Img
                  fluid={contentfulHomePage.aboutSection.photo.fluid}
                  alt="about-us-photo"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <figure className="image is-hidden-tablet">
        <Img
          fluid={contentfulHomePage.aboutSection.photo.fluid}
          alt="about-us-photo"
        />
      </figure>

      <section className="hero is-info contact-page" id="contact">
        <div className="hero-body has-text-centered">
          <div className="container">
            <h1 className="title has-text-centered has-text-primary is-size-2 is-size-3-mobile is-uppercase">
              {contentfulHomePage.contactSection.title}
            </h1>
            <span className="is-size-5 is-size-6-mobile has-text-grey-dark">
              {documentToReactComponents(
                contentfulHomePage.contactSection.description.json
              )}
            </span>
            <ListservSubscribe />
            <div className="field">
              {contentfulHomePage.contactSection.socialLinks.map(
                (link: any, i: number) => (
                  <SocialIcon
                    key={i}
                    url={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    bgColor="#421E28"
                    style={{ height: 60, width: 60 }}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
