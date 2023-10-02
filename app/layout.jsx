import Footer from './components/Footer'
import Header from './components/Header'
import Script from 'next/script'
import './globals.css'
import { Inter } from 'next/font/google'
import 'flowbite'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PickNdrop',
  description: 'A vehicle management service',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js"></Script>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
