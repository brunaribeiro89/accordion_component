"use client";

import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { Item } from '../page'
import { HiChevronDown } from "react-icons/hi";
import { useState } from 'react';
const inter = Inter({ subsets: ['latin']})

type Props = Item & {accordionisActive: boolean; onClickAccordion():void }



export default function AccordionItem({title, description, accordionisActive = false, onClickAccordion }: Props ) {

  return (

   <>
   <div className="flex flex-col bg-white">
       <div className={`flex items-center p-4 bg-slate-400 cursor-pointer border-y border-slate-200 `} 
      onClick = {onClickAccordion}>
        <h1 className=' text-xl font-medium flex-1'>{title}</h1>
        <HiChevronDown onClick={()=>onClickAccordion} className={`w-8 h-8  ${accordionisActive   && "rotate-180"}`} />
      </div>
      {accordionisActive &&
        <p className={`text-base font-medium flex-1 duration-200 ease-in p-4 bg-slate-100 ${accordionisActive  ? "visible " : "hidden"}`}>{description}</p>}
    </div>
    </>
  
  )
}
