import React from 'react'
import NavbarItems from "@/components/NavbarItems";

export default function Navbar() {
  return (
    <div className='flex bg-amber-100 dark:bg-gray-600 lg:text-lg justify-center gap-6 p-4'>
      <NavbarItems title='Trending' param='fetchTrending'/>
      <NavbarItems title='Top Rated' param='fetchTopRated'/>
    </div>
  )
}