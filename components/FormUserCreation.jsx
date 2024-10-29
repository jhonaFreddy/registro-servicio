import React from 'react'

export default function FormUserCreation() {


    return (

        <form className="max-w-sm mx-auto shadow-lg  px-7 py-5 rounded-lg">
           <div>
           <div className="mb-5">
                <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900">Nombre Completo</label>
                <input type="text" id="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
            </div>
            
           </div>
            
            <div className="mb-5">
                <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900">Apellido Paterno</label>
                <input type="text" id="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
            </div>
            <div className="mb-5">
                <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 ">Apellido Materno</label>
                <input type="text" id="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
            </div>
            <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@yahoo.com" required />
            </div>
   
            <div className="mb-5">
                <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900">Escuela</label>
                <input type="text" id="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
            </div>

            <div className='mb-5'>
                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900">Rol</label>
                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option>Controller</option>
                    <option>Reclutador</option>
                    <option>Administrador</option>
                    <option>Estudiante</option>
                </select>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Crear nuevo usuario</button>
        </form>


    )
}
