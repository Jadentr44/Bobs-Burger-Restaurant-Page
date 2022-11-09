import React from 'react'
import Nav from '../components/Nav'
import menuItems from '../components/menu'
export default function menu() {
  return (
    <div>
      <Nav />
      <div className='flex mx-[10%]'>
      <div className='w-[20%] border-2 border-black'>
        <h2 className='text-center text-4xl font-semibold'>Menu</h2>
        <div className='text-center menu'>

        
        <h3 className='text-xl'>Burgers</h3>
        {menuItems.burgers.map(e=>{
          return <p>{e}</p>
        })}
        <h3 className='text-xl'>Sides</h3>
        {menuItems.sides.map(e=>{
          return <p>{e}</p>
        })}
        <h3 className='text-xl'>Drinks</h3>
        {menuItems.drinks.map(e=>{
          return <p>{e}</p>
        })}
        
        </div>
      </div>
      <div className='w-full'>desc</div>
      </div>
    </div>
  )
}
