"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { FaBarsStaggered } from "react-icons/fa6";
import { GrClose } from "react-icons/gr";
import { useSession } from "next-auth/react";

const Header = () => {
    const { data: user} = useSession();
    const [menuToggle, setMenuToggle] = useState(false);
    return (
        <nav className='flex justify-between items-center p-4 md:p-0 md:w-11/12 xl:w-10/12 mx-auto md:py-4'>
              <div className='text-3xl text-green-800 font-black'>
                MyShop
              </div>
              
                <ul className='hidden md:flex gap-12'>
                  <li>
                    <Link href={'/'}>
                    Home
                    </Link>
                  </li>
                  <li>
                    <Link href={'/products'}>
                    Products
                    </Link>
                  </li>
                  {
                    user ?

                  <li>
                    <Link href={'/dashboard/add-product'}>
                    Add Product
                    </Link>
                  </li>:
                  <>  
                  <li>
                    <Link href={'/signup'}>
                    Sign up
                    </Link>
                  </li>
                  <li>
                    <Link href={'/login'}>
                    Login
                    </Link>
                  </li>
                  </>
                  }
                </ul>
           
              <div onClick={() => setMenuToggle(!menuToggle)} className='md:hidden'>
                {
                    menuToggle ? <GrClose size={24}/> : <FaBarsStaggered size={24}/>
                }
              </div>
              
                <ul className={`md:hidden absolute top-18 right-4 ${menuToggle ? 'flex flex-col gap-4' : 'hidden'} p-4 bg-white/90 border border-gray-300 rounded` }>
                <li>
                    <Link href={'/'}>
                    Home
                    </Link>
                  </li>
                  <li>
                    <Link href={'/products'}>
                    Products
                    </Link>
                  </li>
                  {
                    user ?

                  <li>
                    <Link href={'/'}>
                    Profile
                    </Link>
                  </li>:
                  <>  
                  <li>
                    <Link href={'/'}>
                    Sign up
                    </Link>
                  </li>
                  <li>
                    <Link href={'/'}>
                    Login
                    </Link>
                  </li>
                  </>
                  }
                </ul>
             
            </nav>
    );
};

export default Header;