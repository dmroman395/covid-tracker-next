import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
<<<<<<< HEAD
  return <Component {...pageProps} />
=======
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
        <title>COVID Tracker</title>
      </Head>
      <Component {...pageProps} />
    </>
    
  )
>>>>>>> 16885b3 (Cherry-picking started)
}

export default MyApp
