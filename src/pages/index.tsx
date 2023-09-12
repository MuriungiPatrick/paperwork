import Image from 'next/image'
import { Inter } from 'next/font/google'
import Login from '@/pages/login'
import Dashboard from '@/pages/dashboard'
import Header from '@/pages/components/Header'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
     
    <main className="hero bg-primary">
    <Header />
     <div className="container-fluid bg-white text-capitalize">
        <h1>Welcome to paperwork</h1>
         
         <Link href="/dashboard"><Dashboard /> </Link>

          <Login />
     </div>
    </main>
  )
}
