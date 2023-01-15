import '../styles/globals.css'
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <div data-theme="authorises" className="bg-slate-900">
      <Analytics />
      <Component {...pageProps} />
    </div>
  ) 
}

export default MyApp
