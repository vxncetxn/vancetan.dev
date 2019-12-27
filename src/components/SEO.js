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

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
    </Helmet>
  );
};

export default SEO;
