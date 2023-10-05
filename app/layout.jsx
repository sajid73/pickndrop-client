import Script from 'next/script'
import './globals.css'
import { Inter } from 'next/font/google'
import 'flowbite'
import Layout_provider from './layout_provider'

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
        <Layout_provider>
          {children}
        </Layout_provider>
      </body>
    </html>
  )
}
