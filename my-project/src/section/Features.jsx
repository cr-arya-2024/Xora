import React from 'react'
import { features } from '../constant'
import { Element } from 'react-scroll'
import { Button } from './Button'
const Features = () => {
    return (
        <section>
            <Element name="features">
                <div className='container  md:overflow-hidden '>
                    <div className='relative flex md:flex-wrap flex-nowrap border-2 border-s3 rounded-7xl
                     md:overflow-hidden max-md:flex-col feature-after md:g7 max-md:border-none
                      max-md:rounded-none max-md:gap-3 '>
                        {/* where u see g that is background color */}
                        {
                            features.map((feature) => (<div key={feature.id} className='relative z-2 md:px-10 px-5 md:pb-10 pb-5
                               flex-50  max-md:g7 max-md:border-2  max-md:border-s3 max-md:rounded-3xl max-md:flex-320'>
                                <div className='w-full flex justify-start items-start'>
                                    <div className='-ml-3 mb-12 flex  items-center justify-center flex-col'>
                                        <div className='w-0.5 h-16 bg-s3'></div>
                                        <img src={feature.icon} alt="icon" className='size-28 object-contain' />
                                    </div>
                                </div>
                                <p className='mb-5 max-md:mb-6 max-md:h5 caption '>{feature.caption}</p>
                                <h2 className='max-w-400 mb-7 h3 text-p4 max-md:mb-6 max-md:h5'>{feature.title}</h2>
                                <p className='mb-11 body-1 max-md:mb-8 max-md:body-3'>{feature.text}</p>
                                <Button icon={feature.button.icon}>{feature.button.title}</Button>
                            </div>))
                        }
                    </div>
                </div>
            </Element>
        </section>
    )
}

export default Features