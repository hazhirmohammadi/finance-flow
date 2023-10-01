import './globals.css'
import '@/public/font/dmsans/style.css'
import {Inter} from 'next/font/google'

import Home from "@/components/home/Home";

// const inter = Inter({subsets: ['latin']})

export const metadata = {
   title: 'Create Next App',
   description: 'Generated by create next app',
}

export default function RootLayout({children}) {
   return (
       <html lang="en">
       <body className="">
       <Home/>
       <div>
          {children}
       </div>
       </body>
       </html>
   )
}
