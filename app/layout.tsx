import './globals.css'
import { Inter } from 'next/font/google'
import Header from "@/components/header"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ning An | Personal Portfolio',
  description: 'Ning An is a full-stack developer with 1 years of experience and a Msc of Computer Science.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} pt-28 bg-gray-50 text-gray-950`}>
        <div className='bg-[#fbe2e3] 
                        absolute 
                        -z-10
                        top-[-6rem] 
                        right-[11rem] 
                        h-[31.25rem] 
                        w-[31.25rem] 
                        rounded-full 
                        blur-[10rem] 
                        sm:w-[68.75rem]' />
        <div className='bg-[#bdb7fb] 
                        absolute 
                        -z-10
                        top-[-1rem] 
                        left-[-35rem] 
                        h-[31.25rem] 
                        w-[50rem] 
                        rounded-full 
                        blur-[10rem] 
                        sm:w-[68.75rem]
                        md:left-[-33rem]
                        lg:left-[-28rem]
                        xl:left-[-15rem]
                        2xl:left-[-5rem]' />
        <Header />
        {children}
        </body>
    </html>
  )
}
