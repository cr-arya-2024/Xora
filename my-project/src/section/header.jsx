import { useState } from 'react';
import { clsx } from 'clsx'
import { Link as LinkScroll } from 'react-scroll';
const NavLink = ({ title }) => (
  <LinkScroll className='base-bold text-p4  transition-colors 
  duration-1000 cursor-pointer hover:text-p1 uppercase max-lg:my-4 max-lg:h5' >{title}</LinkScroll>
)
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className='fixed top-0 left-0 z-50 w-full  py-10'>
      <div className='container  flex h-14 items-center max-lg:px-5'>
        <a className='lg:hidden  flex-1 cursor-pointer z-2' href='http://localhost:5173/'> {/* the  hidden makes the logo hidden for destop*/}
          <img src="/xora (1).svg" alt=" App Logo" className='w-115  h-55'/>
        </a>
        <div className={clsx('w-full max-lg:fixed max-lg:left-0 max-lg:top-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0'
          , isOpen ? 'max-lg:opacity-100' : 'max-lg:pointer-events-none')}>
          <div className=' max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden
           sidebar-before max-md:px-4 '>
            <nav className='max-lg:relative max-lg:z-2 max-lg:my-auto'>
              <ul className='flex max-lg:block max-lg:px-12'>
                <li className='nav-li'>
                  <NavLink title="features" />
                  <div className='dot'></div>
                  <NavLink title="pricing" />
                </li>
                <li className='nav-logo'>
                  <LinkScroll
                    to="hero"
                    offset={-150} spy smooth className={clsx("max-lg:hidden translate-transform duration-500  cursor-pointer")}
                  >
                    {/* spy tell u r on that particular section in navbar  */}
                    <img src=" /xora (1).svg" className='w-160 h-55' alt="logo" />
                  </LinkScroll>
                </li>
                <li className='nav-li'>
                  <NavLink title="faq"></NavLink>
                  <div className='dot'></div>
                  <NavLink title="download"></NavLink>
                </li>
              </ul>
            </nav>
            <div className='lg:hidden block absolute top-1/2 left-0  w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90'>
              {/* here the div   is relative to the frist div */}
              <img src="bg-outlines (1).svg" width={960} height={380} className='relative z-2' />
              {/* here the both the bg images are relative and absoulte to each other */}
              <img src="bg-outlines-fill (1).png" width={960} height={380} className='absolute inset-0 mix-blend-soft-light opacity-5' />
            </div>
          </div></div>
        <button onClick={isOpen === true ? () => setIsOpen(false) : () => setIsOpen(true)} className='lg:hidden z-2 
        size-10 border-s4/25 rounded-full flex justify-center items-center'>
          <img src={isOpen ? "/close (1).svg" : "/magic .svg"} className='size-1/2 object-contain '></img>
          {/* src={` ${isOpen ?"/close":"/magic"}.svg`} */}
        </button>
      </div></header>
  )
}

export default Header