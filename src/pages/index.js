import React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
  return(
    <Layout pageTitle='Home Page' >
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt='peta pepe mojica'
        src='../images/mujica07.jpg'
      />
    </Layout>
  );
}

export default IndexPage;