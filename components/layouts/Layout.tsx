'use client'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import React from 'react'
import Header from '../modules/Header/Header'
import MobileNavbar from '../modules/MobileNavbar/MobileNavbar'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const isMedia800 = useMediaQuery(800)
  return (
    <>
      <Header />
      {children}
      {isMedia800 && <MobileNavbar />}
      <div className=''></div>
    </>
  )
}

export default Layout