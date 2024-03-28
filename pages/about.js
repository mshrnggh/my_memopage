import Head from 'next/head'

export default function About() {
  return (
    <div>
      <Head>
        <title>My About Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>About My Page</h1>
        <p>This is the ABOUT page of my Next.js application.</p>
      </main>
    </div>
  )
}

