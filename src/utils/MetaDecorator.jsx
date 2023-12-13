import React from "react";
import { Helmet } from "react-helmet";

const metaDecorator = {
  "hostname": "https://honourablefm.com",
  //   "twitterUsername": "@celikkoseoglu"
}

const MetaDecorator = ({ title, description, imageUrl, imageAlt }) => {
  console.log({ title, description, imageUrl, })
  console.log(metaDecorator.hostname + window.location.pathname + window.location.search)
  console.log(metaDecorator.hostname + imageUrl)
  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta
        property="og:url"
        content={metaDecorator.hostname + window.location.pathname + window.location.search}
      />
      {/* <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image:alt" content={imageAlt} />
    <meta name="twitter:site" content={metaDecorator.twitterUsername} /> */}
    </Helmet>
  )
};



export default MetaDecorator;