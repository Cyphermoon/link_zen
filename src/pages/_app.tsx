import ModalManager from '@/components/modals/ModalManager';
import WaitListProvider from '@/context/WaitlistProvider'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModalManager>
      <WaitListProvider>
        <Component {...pageProps} />
        <ToastContainer />
      </WaitListProvider>
    </ModalManager>


  )
}
