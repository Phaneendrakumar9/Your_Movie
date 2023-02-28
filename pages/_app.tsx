import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../hooks/useAuth'
import {RecoilRoot} from 'recoil'
import NextNProgress from 'nextjs-progressbar'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <RecoilRoot>
      <AuthProvider>
        <NextNProgress color='#fe6d2b'/>
           <Component {...pageProps} />
        </AuthProvider> 
    </RecoilRoot>
  )
        
}

export default MyApp
