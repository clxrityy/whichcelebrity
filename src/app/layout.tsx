import Header from '@/components/Header';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { roboto } from '@/constants/fonts';


export const metadata: Metadata = {
  title: 'Which Celebrity Are You?',
  description: 'Which celebrity are you based on your answers to these? Powered by AI.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </head>
      <body className={roboto.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
