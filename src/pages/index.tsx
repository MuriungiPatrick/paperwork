import Image from 'next/image'
import { Inter } from 'next/font/google'
import Login from '@/pages/login'
import Dashboard from '@/pages/dashboard'
import Header from '@/pages/components/Header'
import Footer from '@/pages/components/Footer'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
     
    <main className="hero">
      <Login />
      <Footer />
    </main>
  )
}
