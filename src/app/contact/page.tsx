import Head from 'next/head';
import EstimateForm from './estimateForm';
import ContactForm from './ContactForm';

export default function EstimatePage() {
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
