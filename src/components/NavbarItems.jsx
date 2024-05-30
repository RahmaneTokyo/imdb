"use client"
import React from 'react'
import Link from "next/link";
import {useSearchParams} from "next/navigation";

export default function NavbarItems({title, param}) {
    const searchParams = useSearchParams();
    const genre = searchParams.get('genre');
    return (
        <div>
            <Link
                className={`hover:text-amber-600 font-semibold transition duration-300 ${genre === param ? 
                'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg' : ''}`}
                href={`/?genre=${param}`}> {title}</Link>
        </div>
  )
}