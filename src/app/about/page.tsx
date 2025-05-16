import Head from 'next/head';
import Construction from './construction';



export default function EstimatePage() {
  return (
    <>
      <Head>
        <title>About PNW cleaning</title>
        <meta name="description" content="Learn about the team behind PNW cleaning" />
      </Head>
      <main className="py-10 px-4 flex flex-col lg:flex-row justify-center ">
        <Construction />
      </main>
    </>
  );
}