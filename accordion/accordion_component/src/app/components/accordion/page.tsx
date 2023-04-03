import { Inter } from 'next/font/google'
import styles from './page.module.css'
import AccordionItem from './item/page'

const inter = Inter({ subsets: ['latin']})

export type Item = {
  title: string,
  description: React.ReactNode | string
}

type  Props = {
 items: Item[],
 activeIndex?:number,
 onChangeActiveIndex(index:number):void
}
export default function Accordion({items=[],activeIndex, onChangeActiveIndex }:Props) {

  return (

   <div className='w-1/2 mx-auto bg-white shadow-md rounded-md' >
    {items.map((item, index)=>
    (
      <AccordionItem accordionisActive={activeIndex == index } {...item}   onClickAccordion={()=> onChangeActiveIndex(index)}/>
    ))}
    </div>

   
  )
}
