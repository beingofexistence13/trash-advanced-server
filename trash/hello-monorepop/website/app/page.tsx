import Image from 'next/image'
import { Navbar } from '../components'
import styles from './page.module.css'

export default function Home() {
  return (
    <div  className=' bg-slate-200'>
      <Navbar/>
      <h1>Multiverse</h1>
    </div>
  )
}
