import React from 'react'
import Image from 'next/image'
export default function FormCountryCreation() {
    return (
        <>
             <div className='flex flex-col max-w-sm mx-auto my-3 rounded-lg overflow-hidden shadow-lg
             md:flex md:flex-row md:max-w-xl  '> 
                 <figure className='w-full rounded-lg h-60 md:h-72 md:w-3/5'>
                    <Image
                        src="/map-306235_640.png"
                        height={500}
                        width={500}
                        alt='student'
                        className='w-full h-full'
                    />
                </figure> 

                <form className="w-full px-7 py-5 rounded-lg md:w-2/5  ">

                    <div className="mb-5">
                        <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900">Nombre del Pais</label>
                        <input type="text" id="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
                    </div>


                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Crear</button>
                </form>

             </div>


        </>
    )
}
