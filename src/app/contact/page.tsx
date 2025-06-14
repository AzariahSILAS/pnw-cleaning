'use client';

import { useEffect } from 'react';
import Head from 'next/head';
import EstimateForm from './estimateForm';
import ContactForm from './ContactForm';
import * as fbq from '@/lib/fbpixel'; // Make sure this path matches your file

export default function EstimatePage() {
  useEffect(() => {
    fbq.event('EstimatePageVisited'); // custom event name — can be anything
  }, []);

  return (
    <>
      <Head>
        <title>Get an Estimate - PNW Cleaning</title>
        <meta name="description" content="Request a free cleaning service estimate from PNW Cleaning." />
      </Head>
      <main className="py-10 px-4 flex flex-col lg:flex-row justify-center ">
        <EstimateForm />
        <ContactForm />
      </main>
    </>
  );
}
