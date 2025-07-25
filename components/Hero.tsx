import { Spotlight } from './ui/Spotlight'
import { cn } from '@/utils/cn'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { FaLocationArrow } from "react-icons/fa";
import MagicButton from './ui/MagicButton'
const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
        <div>
            <Spotlight className='-top-40 -left-10 md:-left-32
            md:-top-20 h-screen' fill='white'/> 
            <Spotlight className='top-10 left-full h-[80vh] w-[50vw]'
             fill='purple'/> 
            <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' 
            fill='blue'/> 
        </div>
        <div className="absolute top-0 left-0 flex h-screen w-full items-center justify-center bg-white 
            dark:bg-black-100 dark:bg-grid-white/[0.05] dark:bg-grid-balck/[0.2]">
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center 
            bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100"/>  
        </div>
        <div className='flex justify-center relative my-20 z-10'>
            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
                    Dynamic web with next.js
                </h2>
                <TextGenerateEffect className="text-center text-[40px] md:text-5xl lg:text-6xl" words="Transforming Concepts into Seamless User Experinces"/>
                <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
                    Hi, I'm Shatrunjay, a Frontend Developer 
                </p>
                <a href="#about">
                    <MagicButton title="show my work"
                    icon={<FaLocationArrow/>}
                    position='right'
                    />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Hero