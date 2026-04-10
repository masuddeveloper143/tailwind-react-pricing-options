import React from 'react';
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

export default navData;
const Navbar = () => {
    return (
        <nav>




            
            {/* <ul className='flex'>
                <li className='mr-10'><a href="#">Home</a></li>
                <li className='mr-10'><a href="#">About</a></li>
                <li className='mr-10'><a href="#">More</a></li>
            </ul> */}
        </nav>
    );
};

export default Navbar;