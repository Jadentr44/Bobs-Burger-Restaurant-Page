import React,{useState} from 'react'
import Nav from '../components/Nav'
import menuItems from '../components/menu'
export default function menu() {
  const [selected,setSelected]= useState("Original")
  return (
    <div>
      <Nav />
      <div className='flex mx-[10%] mt-8'>
      <div className='w-[20%] border-2 border-black'>
        <h2 className='text-center text-5xl font-semibold bg-[#ee212d]'>Menu</h2>
        <div className='text-center menu bg-white'>

        
        <h3 className='text-3xl border-y-2 border-black'>Burgers</h3>
        {menuItems.burgers.map(e=>{
          return <p style={{background:selected==e?"#6B7280":""}} onClick={()=>setSelected(e)} className='border-t-2 border-black py-2 hover:bg-gray-500 cursor-pointer'>{e}</p>
        })}
        <p className='border-t-2 border-black py-2 hover:bg-gray-500 cursor-pointer'>Burger Of The Day</p>
        <h3 className='text-3xl border-y-2 border-black'>Sides</h3>
        {menuItems.sides.map(e=>{
          return <p style={{background:selected==e?"#6B7280":""}} onClick={()=>setSelected(e)} className='border-t-2 border-black py-2 hover:bg-gray-500 cursor-pointer'>{e}</p>
        })}
        <h3 className='text-3xl border-y-2 border-black'>Drinks</h3>
        {menuItems.drinks.map(e=>{
          return <p style={{background:selected==e?"#6B7280":""}} onClick={()=>setSelected(e)} className='border-t-2 border-black py-2 hover:bg-gray-500 cursor-pointer'>{e}</p>
        })}
        
        </div>
      </div>
      <div className='w-full'>desc</div>
      </div>
    </div>
  )
}
