'use client'
import Link from 'next/link'
import React, { Dispatch, SetStateAction } from 'react'
import Button from './button'

export function BurgerMenu({
  className,
  isOpenMenu,
  setIsOpenMenu,
}: {
  className: string
  isOpenMenu: boolean
  setIsOpenMenu: Dispatch<SetStateAction<boolean>>
}) {
  return (
    <>
      <div
        className={`relative w-icon-lg overflow-hidden h-icon-lg cursor-pointer duration-300 z-20 ${className}`}
        onClick={() => setIsOpenMenu((prev) => !prev)}
      >
        <div
          className={` duration-300 w-full h-[2px] absolute bg-white left-0 top-0 ${isOpenMenu ? ' animate-burgerTopOpen' : 'animate-burgerTopClose'}`}
        ></div>
        <div
          className={` duration-200 w-full h-[2px] absolute bg-white left-0 top-1/2 -translate-y-1/2 ${isOpenMenu ? ' animate-leftHide' : 'animate-leftShow'}`}
        ></div>
        <div
          className={` duration-300 w-full h-[2px] absolute bg-white left-0 top-full -translate-y-1/2 ${isOpenMenu ? ' animate-burgerBottomOpen' : 'animate-burgerBottomClose'}`}
        ></div>
      </div>
      <BurgerOverlay isOpenMenu={isOpenMenu} />
    </>
  )
}
export function BurgerOverlay({ isOpenMenu }: { isOpenMenu: boolean }) {
  return (
    <div
      className={`fixed top-0 backdrop-blur-md left-0 w-full h-screen flex items-center justify-center ${isOpenMenu ? 'animate-leftShow' : 'animate-leftHide'}`}
    >
      <nav className="flex flex-col items-center gap-10">
        <Link
          className="text-sm text-slate-200 hover:text-slate-200/80 duration-300"
          href="#about"
        >
          О нас
        </Link>
        <Link
          className="text-sm text-slate-200 hover:text-slate-200/80 duration-300"
          href="#benifits"
        >
          Преимущества
        </Link>
        <Link
          className="text-sm text-slate-200 hover:text-slate-200/80 duration-300"
          href="#creators"
        >
          О создателях
        </Link>
        <Link href="#feedback">
          <Button>Контакты</Button>
        </Link>
      </nav>
    </div>
  )
}
