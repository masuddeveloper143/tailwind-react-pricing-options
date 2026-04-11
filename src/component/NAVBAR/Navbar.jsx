import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';
const navData = [
    {
        id: 1,
        name: "Home",
        path: "/"
    },
    {
        id: 2,
        name: "About",
        path: "/about"
    },
    {
        id: 3,
        name: "Services",
        path: "/services"
    },
    {
        id: 4,
        name: "Blog",
        path: "/blog"
    },
    {
        id: 5,
        name: "Contact",
        path: "/contact"
    }
];

const Navbar = () => {

    const [open, setOpen] = useState(false)
    const Links = navData.map(route => <Link key={route.id} route={route}></Link>)

    return (
        <nav className='flex justify-between mx-10 mt-5'>


            <span onClick={() => setOpen(!open)} className='flex gap-5 items-center'>
                {open ? <X className='md:hidden'></X> : <Menu className='md:hidden'></Menu>}

                <ul className={`md:hidden absolute duration-500
                     ${open ? 'top-8' : '-top-40'} 
                     bg-amber-200 text-black`}>
                    {Links}
                </ul>

                <h1 className='text-3xl text-bold'> my navbar</h1>
            </span>


            <ul className='md:flex hidden '>
                {
                    Links
                }
            </ul>

            {/* <ul className='flex'>
                {
                    navData.map(route => <li className='mr-10'>
                        <a href={route.path}>{route.name}</a></li>
                    )
                }
            </ul> */}



            {/* <ul className='flex'>
                <li className='mr-10'><a href="#">Home</a></li>
                <li className='mr-10'><a href="#">About</a></li>
                <li className='mr-10'><a href="#">More</a></li>
            </ul> */}

            <button>sign in</button>
        </nav>
    );
};

export default Navbar;