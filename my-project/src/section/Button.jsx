import React from 'react'
import clsx from 'clsx'
import { Marker } from './Marker'
 


export const Button = ({href,containerClassName,onClick,icon,children,markerFill}) => {
    const Inner=()=><>
<span className='relative flex  items-center  min-h-[60px] px-3 g4 rounded-2xl 
inner-before group-hover:before:opacity-100 overflow-hidden'>
    <span className='absoulte  glow-before glow-after -left-[50px '>
        
        <Marker markerFill={markerFill}/>
        
    </span>
    {icon && (<img src={icon} alt="circle" className='size-10 mr-5 object-contain z-10'></img>)}
<span className='relative z-2 font-poppins base-bold text-p1 uppercase'>{children}</span>
</span>


</>
  return href ? (
<a href={href} className={clsx("relative p-0.5 g5 rounded-2xl shadow-500 group",containerClassName)}> 
<Inner/>
</a>
  ):(
    <button className={clsx("relative,p-0.5 g5 rounded-2xl shadow-500 group",containerClassName)} onClick={onClick}>
        
<Inner/>
    </button>
  )
}
