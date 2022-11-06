import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div data-theme="authorises" className="bg-slate-900">
      <Component {...pageProps} />
    </div>
  ) 
}

export default MyApp
