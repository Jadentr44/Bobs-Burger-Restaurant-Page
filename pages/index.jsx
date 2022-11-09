import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav'
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <div className='h-screen w-screen overflow-hidden'>
      <Nav />
      <main className='flex lg:flex-row flex-col justify-center lg:h-[90vh] h-screen'>
        <div className='lg:w-1/2 lg:my-auto  lg:pl-[15%] lg:mx-0 mx-[10%]'>
          {/* <h1 className='text-7xl'>Bobs Burgers</h1> */}
          <Image 
          className='lg:hidden block mx-auto'
      src="/logo.png"
      alt="Picture of the author"
      width={500}
      height={500}
    />
    <Image 
          className='lg:block hidden '
      src="/logo.png"
      alt="Picture of the author"
      width={750}
      height={500}
    />
          <h3 className='text-xl mt-4 ml-1 text-center lg:text-left lg:text-5xl md:text-3xl'>Family run hamburger restaurant
          </h3>
        </div>
        <div className='lg:w-1/2 flex justify-center items-center'><Image className='lg:hidden block'
      src="/family.png"
      alt="Picture of the author"
      width={500}
      height={500}
    />
    <Image className='lg:block hidden'
      src="/family.png"
      alt="Picture of the author"
      width={800}
      height={500}
    />
    </div>
      </main>
     <footer className='lg:hidden  absolute bottom-0 right-5 flex text-[#ee212d]'>
     
          <div className="border-2 border-[#ee212d] rounded-xl mx-2 hover:bg-yellow-200">
            <a href="https://www.facebook.com/BobsBurgers/">
              <FaFacebookF className="m-2" size={25} />
            </a>
          </div>
          <div className="border-2 border-[#ee212d] mx-2 rounded-xl hover:bg-yellow-200">
            <a href="https://www.instagram.com/bobsburgersfox/?hl=en">
              <FaInstagram className="m-2" size={25} />
            </a>
          </div>
       
     </footer>
    </div>
  )
}
