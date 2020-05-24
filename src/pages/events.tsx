import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";

const EventsPage = () => {
  const { contentfulEventsPage } = useStaticQuery(graphql`
    query {
      contentfulEventsPage {
        title
        subtitle
        upcomingEventsHeader
        pastEventsHeader
        events {
          title
          date
          updatedAt
          location
          city
          link
          thumbnail {
            fluid {
              src
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <section className="hero is-info">
        <div className="hero-body has-text-centered">
          <div className="container">
            <h1 className="title has-text-centered has-text-primary is-size-2 is-size-3-mobile is-uppercase">
              {contentfulEventsPage.title}
            </h1>
            <span className="is-size-5 is-size-6-mobile has-text-grey-dark">
              {contentfulEventsPage.subtitle}
            </span>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EventsPage;
