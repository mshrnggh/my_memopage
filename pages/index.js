import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to My Home Page</h1>
        <p>This is the home page of my Next.js application.</p>
      </main>
    </div>
  )
}
