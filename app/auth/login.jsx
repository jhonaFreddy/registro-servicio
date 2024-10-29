import Image from 'next/image'
import React from 'react'

export default function Login() {
    return (
        <section className='flex justify-center w-full h-full py-24'>
            <div className='md:flex md:justify-center md:items-center w-[80%] h-full'>

                <div className='flex flex-col justify-center items-center w-full mb-4'>
                    <figure>
                        <Image src={'/logoFunval.png'} width={500} height={200} alt='Logo Funval' priority />
                    </figure>
                    <h2 className='text-center font-semibold'>Registro de Horas de Servicio</h2>
                </div>

                <form className='w-full h-full bg-slate-300 rounded-md p-3 shadow-lg'>

                    <label className='w-full h-9 shadow-lg' htmlFor="correo">
                        <input className='w-full h-9 pl-3 border text-sm rounded-md' type="email" name="correo" id="correo" placeholder='Correo electrónico' required />
                    </label>

                    <label className='w-full h-9 shadow-lg' htmlFor="contra">
                        <input className='w-full h-9 pl-3 border text-sm rounded-md mt-3' type="password" name="contraseña" id="contra" placeholder='Contraseña' required />
                    </label>

                    <button className='w-full h-9 bg-gradient-to-tr from-sky-700 bg-cyan-600 to-teal-600 rounded-md font-semibold text-slate-300 mt-4 shadow-lg hover:bg-gradient-to-tr hover:from-teal-600 hover:via-cyan-600 hover:to-sky-700' type="submit"> Iniciar sesión</button>

                </form>

            </div>

        </section>
    )
}
