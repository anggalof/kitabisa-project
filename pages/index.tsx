import { useEffect } from 'react';
import Router from 'next/router';
import Head from 'next/head';
import { AppContext } from 'next/app';
import Campaign from './campaign';
import React from 'react';

function Home(props: any) {
  useEffect(() => {
    Router.push('/campaign');
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Kitabisa.com - Situs Donasi Terbesar dan Terpercaya di Indonesia</title>
        <meta
          name="title"
          content="Kitabisa.com - Situs Donasi Terbesar dan Terpercaya di Indonesia"
        />
        <meta name="keywords" content="Donasi, Sedekah, Zakat, Infaq, Tolong, Menolong, Kitabisa, Maal, Penghasilan, Donasi Online, Zakat Online, Wakaf" />
        <meta
          name="description"
          content="Situs donasi dan menggalang dana (fundraising) untuk inisiatif, campaign dan program sosial. Mari bergotong royong membangun Indonesia!"
        />
        <meta name="author" content="@gagaadilesmanaputra" />
        <meta
          property="og:title"
          content="Kitabisa.com - Situs Donasi Terbesar dan Terpercaya di Indonesia"
          key="ogtitle"
        />{' '}
        <meta
          property="og:description"
          content="Situs donasi dan menggalang dana (fundraising) untuk inisiatif, campaign dan program sosial. Mari bergotong royong membangun Indonesia!"
          key="ogdesc"
        />
        <meta
          name="robots"
          content="follow, index, max-snippet:70, max-video-preview:60, max-image-preview:large"
        />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:url" content="https://kitabisa.com/" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="https://assets.kitabisa.cc/images/icons/meta/icons-512.png" key="ogimage" />
        <meta itemProp="image" content="https://assets.kitabisa.cc/images/icons/meta/icons-512.png" />
        <meta property="og:image:secure_url" content="https://assets.kitabisa.cc/images/icons/meta/icons-512.png" />
        <meta property="og:image:width" content="460" />
        <meta property="og:image:height" content="500" />
        <meta
          property="og:image:alt"
          content="Kitabisa.com - Situs Donasi Terbesar dan Terpercaya di Indonesia"></meta>
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="product:brand" content="simple" />
        <meta property="product:availability" content="instock" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Kitabisa.com - Situs Donasi Terbesar dan Terpercaya di Indonesia"
        />
        <meta
          name="twitter:description"
          content="Situs donasi dan menggalang dana (fundraising) untuk inisiatif, campaign dan program sosial. Mari bergotong royong membangun Indonesia!"
        />
        <meta name="twitter:image" content="https://assets.kitabisa.cc/images/icons/meta/icons-512.png" />
        <link rel="icon" href="/images/logo.png" />
      </Head>

      <Campaign {...props} />
    </React.Fragment>
  );
}

export async function getServerSideProps(context: AppContext) {
  return {
    props: {},
  }
}

export default Home;
