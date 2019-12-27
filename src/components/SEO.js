import React from "react";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

const SEO = ({ contentTitle, contentDescription, contentPath, isArticle }) => {
  const meta = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          image
          imageTwitter
          sitename
          url
          twitterID
        }
      }
    }
  `).site.siteMetadata;

  const title = contentTitle ? `${contentTitle} | ${meta.title}` : meta.title;
  const description = contentDescription || meta.description;
  const url = contentPath ? `${meta.url}/${contentPath}` : meta.url;
  const type = isArticle ? "article" : "website";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="image" content={meta.image} />
      <link rel="canonical" href={url} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={meta.twitterID} />
      <meta name="twitter:creator" content={meta.twitterID} />
      <meta name="twitter:image" content={meta.imageTwitter} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={meta.image} />
      <meta property="og:site_name" content={meta.sitename} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
    </Helmet>
  );
};

export default SEO;
