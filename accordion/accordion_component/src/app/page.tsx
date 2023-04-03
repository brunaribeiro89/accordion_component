"use client";
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Accordion, { Item } from './components/accordion/page'
import { useState } from 'react';

const inter = Inter({ subsets: ['latin']})

export default function Page() {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const items: Item[] = [
    {
      title: "teste1",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
      title: "teste2",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
      title: "teste3",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
      title: "teste4",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    }, {
      title: "teste5",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    }
  ]
  return (

   <div >
 <Accordion items={items} activeIndex={activeIndex} onChangeActiveIndex={setActiveIndex}/>
    </div>  
  )
}
