import Head from 'next/head'
import { Inter } from '@next/font/google'
import Footer from '@/components/Footer'
// import Navbar from '@/components/Navbar'
// import Header from '@/components/Header'
import HomePage from '@/components/HomePage'

 

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
<Head>
  <title>InsightsWeb</title>
</Head>



<HomePage/>
    </div>
  )
}
