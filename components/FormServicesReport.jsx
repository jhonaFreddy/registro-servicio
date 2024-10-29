import React from 'react'

export default function FormServicesReport() {

    return (
        <form className="max-w-sm mx-auto shadow-lg  px-7 py-5 rounded-lg">

            <div className="mb-5">
                <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900">Cantidad de horas</label>
                <input type="number" id="number" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
            </div>
            <div className="mb-5">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Descripción</label>
  <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Leave a comment..."></textarea>
            </div>
            <div className="mb-5">
                <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900">Categoría</label>
                <input type="text" id="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
            </div>

            <div className="mb-5">
                <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900">Nivel de curso</label>
                <input type="number" id="number" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
            </div>
            <div className='mb-5  '>
                <label className="block mb-2 text-sm font-medium text-gray-900 " htmlFor="user_avatar">Evidencia</label>
                <input className="block w-full text-sm text-gray-900 border  border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none " aria-describedby="user_avatar_help" id="user_avatar" type="file" />
            </div>

            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Enviar reporte</button>
        </form>
    )
}
