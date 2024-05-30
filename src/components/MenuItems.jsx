import React from 'react'
import Link from "next/link";

export default function MenuItems({ title, address, Icon}) {
  return (
      <Link href={address} className='hover:text-amber-500 transition duration-300'>
        <Icon className='text-2xl sm:hidden' />
        <p className='uppercase hidden sm:inline text-sm'>{title}</p>
      </Link>
  )
}