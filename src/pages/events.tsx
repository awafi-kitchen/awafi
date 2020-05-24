import React from "react";
import { graphql, useStaticQuery} from "gatsby";
import Img from "gatsby-image/withIEPolyfill";

import Layout from "../components/layout";

import "../styles/events.scss";
import { OutboundLink } from ".";

const formatDate = (dateString: string) => {
  var date = new Date(dateString);
  var options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
};

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
          location
          city
          link
          thumbnail {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  `);

  const today = new Date();

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
      <section className="section ak-events-list">
        {contentfulEventsPage.events
          .sort(
            (event1: any, event2: any) =>
              new Date(event2.date).valueOf() - new Date(event1.date).valueOf()
          )
          .map((event: any, i: number) => (
            <div className="box" key={i}>
              <div className="media">
                <div className="media-left">
                  <figure className="image is-128x128">
                    <Img fluid={event.thumbnail.fluid} alt={event.title} />{" "}
                  </figure>
                </div>
                <div className="media-content">
                  <div className="content">
                    <h1 className="title is-size-3 has-text-primary is-spaced has-text-weight-semibold">
                      <OutboundLink to={event.link}>{event.title}</OutboundLink>
                    </h1>
                    <h6>
                      {formatDate(event.date)}
                      <br />
                      {event.location}, {event.city}
                    </h6>
                    <br />
                    <div>
                      <OutboundLink
                        to={event.link}
                        className="has-text-primary is-inline-block is-uppercase has-text-weight-semibold"
                      >
                        Check it out →
                      </OutboundLink>
                    </div>
                  </div>
                </div>
                {new Date(event.date) < today && (
                  <div className="media-right">
                    <em>Past Event</em>
                  </div>
                )}
              </div>
            </div>
          ))}
      </section>
    </Layout>
  );
};

export default EventsPage;
