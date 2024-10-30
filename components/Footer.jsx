import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
    return (


        <footer className="bg-white dark:bg-[#0d2c5b] w-full">

            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">

                <div className="flex flex-col items-center justify-between w-full ">
                    <figure className='flex justify-center items-center mb-4'>
                        <Image src={'/logoFunval.png'} width={300} height={200} alt='logo de Funval' className="w-full">
                        </Image>
                    </figure>

                    <ul className="flex flex-wrap justify-center items-center text-xs md:text-sm font-medium text-gray-500  dark:text-gray-400 gap-3">

                        <li>
                            <Link href="#" className="hover:underline me-4 md:me-6">Politica de privacidad</Link>
                        </li>

                        <li>
                            <Link href="#" className="hover:underline me-4 md:me-6">Terminos y condiciones</Link>
                        </li>

                        <li>
                            <Link href="#" className="hover:underline">Contacto</Link>
                        </li>
                    </ul>
                </div>

                <hr className="my-4 mx-auto dark:border-gray-500 lg:my-8" />


                <span className="block text-sm text-gray-500 text-center dark:text-gray-400">© 2024 Funval Internacional™. <br />Todos los derechos reservados.</span>

            </div>

        </footer>


    )
}
