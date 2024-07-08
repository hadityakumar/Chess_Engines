import React from 'react'
import { SidebarWithBurgerMenu } from '@/components/Sidebar';
import { usePageTitle } from '@/context/PageTitleContext.js';
import Link from 'next/link';

const Navbar = () => {
    const { pageTitle } = usePageTitle();
  return (
    <>
      <div className='bg-[#a36634] w-full md:p-3 mb-3 flex justify-between items-center shadow-2xl'>
                    <div className="flex-none">
                        <SidebarWithBurgerMenu />
                    </div>

                    <div className="flex-1 text-center">
                          <span className='md:text-3xl text-xl text-white'>{pageTitle}</span>
                    </div>
                </div>
    </>
  )
}

export default Navbar
