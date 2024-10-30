import React from 'react'
import Image from 'next/image'
import DropDownBtn from './dropDownBtn'
import Link from 'next/link'


export default function NavBar() {
  return (
    <nav className='flex justify-between w-full bg-[#9bbfd7] p-2 '>

      <div className='flex  items-center'>
        <figure className='w-7/12'>
          <Image className='w-full' src={'/logoFunval.png'} width={300} height={200} alt='logo de Funval' priority />
        </figure>

        <div id='btns' className=''>

          <div className='flex '>
           
            <Link
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-800 font-semibold hover:text-[#1a3970]"
            >
              Inicio
            </Link>

            <Link
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-800 font-semibold hover:text-[#1a3970]"
            >
              Nosotros
            </Link>

            <Link
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-800 font-semibold hover:text-[#1a3970]"
            >
              Ayuda
            </Link>
          </div>

        </div>

      </div>
      <div className='flex justify-end items-center'>
        <figure className='w-[30%]'>
          <Image className='w-full rounded-full' src={'/perfil.png'} width={200} height={300} alt='foto de perfil' />
        </figure>

        <DropDownBtn />

        <div className="hidden">

          <Link
            href="#"
            className="block px-1 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-800 font-semibold hover:text-[#1a3970]"
          >
            <button className='active:text-[.8rem] text-xs p-1 rounded-md' type="button">Cerrar <br />sesión</button>

          </Link>
        </div>

      </div>

    </nav>
  )
}
