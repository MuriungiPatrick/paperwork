import Image from 'next/image'
import { Inter } from 'next/font/google'
import Login from '@/pages/login'
import Dashboard from '@/pages/dashboard'
import Header from '@/pages/components/Header'
import Footer from '@/pages/components/Footer'
import Link from 'next/link'
import { OverlayTrigger, Overlay, Tooltip, Button } from 'react-bootstrap';



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  return (
     
    <main className="hero">
      <Login />
      <Footer />
    </main>
  )
}
