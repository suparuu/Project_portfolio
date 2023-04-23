import '@/styles/globals.css'
import { Headmeta } from '../component/Headmeta'
export default function App({ Component, pageProps }) {
  return (
    <>
      <Headmeta></Headmeta>
      <Component {...pageProps} />
    </>
    

  )
}
