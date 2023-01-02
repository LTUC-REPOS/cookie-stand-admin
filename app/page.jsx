"use client"
import { Inter } from '@next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-indigo-100'>
    <Header/>
    <Main/>
    <Footer/>

    </div>
  )
}
