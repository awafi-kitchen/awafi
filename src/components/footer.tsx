import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { SocialIcon } from "react-social-icons";

const SOCIAL_ICON_SIZE = 30;

const FooterScaffolding = (props: any) => (
  <footer className="footer has-background-primary has-text-white">
    <div className="columns is-vcentered has-text-centered">
      <div className="column is-one-fifth is-hidden-mobile" />
      <div className="column">
        Website content licensed under{" "}
        <a
          className="has-text-weight-semibold has-text-white"
          href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
        >
          CC BY NC SA 4.0
        </a>
        .
      </div>
      <div className="column is-one-fifth">
        <div className="field is-inline">
          {props.content.contactSection.socialLinks.map(
            (link: any, i: number) => (
              <SocialIcon
                key={i}
                url={link}
                target="_blank"
                rel="noopener noreferrer"
                bgColor="#FFFFFF"
                style={{ height: SOCIAL_ICON_SIZE, width: SOCIAL_ICON_SIZE }}
              />
            )
          )}
          <SocialIcon
            url="mailto:theawafikitchen@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            bgColor="#FFFFFF"
            style={{ height: SOCIAL_ICON_SIZE, width: SOCIAL_ICON_SIZE }}
          />
        </div>
      </div>
    </div>
  </footer>
);

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        contentfulHomePage {
          contactSection {
            socialLinks
          }
        }
      }
    `}
    render={(data) => <FooterScaffolding content={data.contentfulHomePage} />}
  />
);

export default Footer;
