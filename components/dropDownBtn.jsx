import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

export default function DropDownBtn() {
  return (
    <Menu id='DropDownBtn' as="div" className="relative inline-block text-left ">
      <div>
        <MenuButton className="flex w-full justify-center items-center">

          <ChevronDownIcon aria-hidden="true" className="mt-1 h-5 w-5 text-gray-500" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-4 z-10 mt-4 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-[#d6e0e7] shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
  
        <div className="py-1">
         
        <MenuItem>
            <Link
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-800 font-semibold"
            >
              Cuenta
            </Link>
          </MenuItem>
        </div>
        <div className="py-1 md:hidden">
          <MenuItem>
            <Link
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-800 font-semibold"
            >
              Inicio
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-800 font-semibold"
            >
              Nosotros
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-800 font-semibold"
            >
              Ayuda
            </Link>
          </MenuItem>
        </div>

        <div className="py-1">
          <MenuItem>
            <Link
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-800 font-semibold"
            >
              Cerrar sesión
            </Link>
          </MenuItem>
        </div>
       
      </MenuItems>
    </Menu>
  )
}
