"use client"
import React, {useEffect, useState} from 'react'
import {useTheme} from "next-themes";
import {MdDarkMode, MdLightMode} from "react-icons/md";

export default function DarkModeSwitch() {
  const {theme, setTheme, systemTheme} = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === 'system' ? systemTheme : theme;
  useEffect(() => setMounted(true), []);
  return (
    <div>
      {mounted && currentTheme === 'dark' ? (
          <MdLightMode onClick={() => setTheme('light')} className='text-xl cursor-pointer hover:text-amber-500 transition duration-300' />
      ) : (
          <MdDarkMode onClick={() => setTheme('dark')} className='text-xl cursor-pointer hover:text-amber-500 transition duration-300' />
      )
    } </div>
  )
}