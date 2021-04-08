import React from "react";
import { Helmet } from "react-helmet-async";

export default function SEO({ title }) {
  return (
    <Helmet>
      <title>{title}</title>
      <link rel="icon" href="../../assets/icons/logo.ico" />
    </Helmet>
  );
}
