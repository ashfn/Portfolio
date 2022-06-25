import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div data-theme="authorises" className="bg-i/80 pl-2 pr-2">
      <Component {...pageProps} />
    </div>
  ) 
}

export default MyApp
