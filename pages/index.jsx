import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav'

export default function Home() {
  return (
    <div className='h-screen w-screen overflow-hidden'>
      <Nav />
      <main className='flex h-[90vh]'>
        <div className='w-1/2 my-auto  pl-[15%]'>
          <h1 className='text-7xl'>Bobs Burgers</h1>
          <h3 className='text-xl mt-4 ml-1'>Family run hamburger restaurant
          </h3>
        </div>
        <div className='w-1/2 flex justify-center items-center'><Image 
      src="/family.png"
      alt="Picture of the author"
      width={500}
      height={500}
    /></div>
      </main>
     
    </div>
  )
}
