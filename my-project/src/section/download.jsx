import React from 'react'
import { Element } from 'react-scroll'
import { links } from '../constant'
import { Marker } from './Marker'
const Download = () => {
    return (
        <section className=''>
            <Element className="relative g7 pb-32 pt-24 max-lg:pb-24 max-md:py-16" name="download">
                <div className='container '>
<div className='flex items-center'>
<div className='relative mr-6 flex-540 max-xl:flex-280 max-lg:flex-256 max-md:flex-100'>
    <div className='mb-10'>
        <img src="/xora (1).svg" alt="xora logo"  width={160} height={55}/>
    </div>
    <p className='body-1 mb-10 max-w-md'>Try it now for free</p>
<ul className='flex flex-wrap items-center gap-6'>
    {links.map(({id,url,icon})=>(
        <li key={id} className='download_tech-link download_tech-link_last_before download_tech-link_last-after'>
            <a className='size-22 download_tech-icon_before relative flex items-center justify-center rounded-half border-2 border-s3 bg-s1 transition-borderColor flex-wrap duration-500 ' href={url}>
            <span className='absolute -top-2 rotate-90'>
                <Marker/>
            </span>
            {/* <img src='lines.svg' alt="" className='absolute size-13/20'></img> */}
            <span className='download_tech-icon'>{icon}</span>
            </a></li>
    ))}
</ul>
</div>
<div className='mb-10 max-md:hidden'>
    <div className='download_perview-before download_perview-after rounded-40 relative w-[955px] border-2 border-s5 p-6 '>
<div className='relative rounded-3xl bg-s1 px-6 pb-6 pt-14'>
<span className='download_preview-dot left-6 bg-p2'></span>
<span className='download_preview-dot left-11 bg-s3'></span>
<span className='download_preview-dot left-16 bg-p1/15'></span>
<img className="rounded-xl"height={655} src="screen (1).jpg" alt="pic" width={855} />
</div> 
    </div>
</div>
</div>
                </div>
            </Element>
        </section>
    )
}

export default Download