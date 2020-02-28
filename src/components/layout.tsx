import React from 'react'
import Helmet from 'react-helmet'
import Header from './header'
import Footer from './footer'

import '../styles/layout.scss' 
import { StaticQuery, graphql } from 'gatsby'

const SITE_TITLE_SUFFIX = ' | Awafi Kitchen';
const SITE_MAIN_URL = 'https://www.awafikitchen.com';
const FB_APP_ID = "197813957975773";

// import './layout.css'

type Props = {
  metadata?: {
    [key: string]: any;
  },
  defaultContent?: {
    metadata: Props["metadata"]
  },
  children: React.ReactNode,
  isLandingPage?: boolean,
}

/** Component checks for custom metadata attributes, and then uses the default homepage values as a fallback */
const LayoutScaffolding = ({ metadata, children, defaultContent}: Props) => {

  var title, description, keywords, shareImageURL;
  if (defaultContent && defaultContent.metadata) {

    title = (metadata && (metadata.pageTitle + SITE_TITLE_SUFFIX)) || defaultContent.metadata.pageTitle;
    description = (metadata && metadata.pageDescription) || defaultContent.metadata.pageDescription;
    keywords = (metadata && metadata.keywords) || defaultContent.metadata.keywords;
    shareImageURL = (metadata && metadata.shareImage && metadata.shareImage.file &&
      metadata.shareImage.file.url) || defaultContent.metadata.shareImage.file.url;
      
   }
  

  return (
    <>
      <Helmet>
          <html lang="en" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <meta name="author" content="Awafi Kitchen" />

          <meta property="fb:app_id" content={FB_APP_ID} />
          <meta property="og:site_name" content={title} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:url" content={SITE_MAIN_URL} />
          <meta property="og:image" content={encodeURI(shareImageURL)} />
          <meta property="og:type" content="website" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:url" content={SITE_MAIN_URL} />
          <meta name="twitter:image" content={encodeURI(shareImageURL)} />
          <meta name="twitter:image:alt" content={title} />
      </Helmet>
      <Header />
      <div className="page-content">
        {children}
      </div>
      <Footer />
    </>
    );
};

const Layout = ({metadata, children}: Props) => (
  <StaticQuery
      query={graphql`
        query {
          contentfulHomePage {
            metadata {
              pageTitle
              pageDescription
              keywords 
              shareImage {
                file {
                  url
                }
              }
            }
          }
        }
      `}
    render = {data => (<LayoutScaffolding 
      metadata={metadata}
      defaultContent={data.contentfulHomePage}
      children={children} />)}
    />
  );

export default Layout

