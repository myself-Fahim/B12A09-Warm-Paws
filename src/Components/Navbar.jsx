import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='bg-slate-500 px-[20px] lg:px-[70px]'>
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown text-white">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-slate-500 rounded-box z-5 mt-3 w-52 p-2 shadow">
                            <NavLink to='/'>Home</NavLink>
                            <NavLink to='/service' >Service</NavLink>
                            <NavLink to='/profile' >My Profile</NavLink>
                        </ul>
                    </div>
                    <a className=" text-xl text-white font-bold">Warm-Paws</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" px-1 text-white font-bold">
                        <NavLink to='/' className='mr-5'>Home</NavLink>
                        <NavLink to='/service' className='mr-5'>Service</NavLink>
                        <NavLink to='/profile' >My Profile</NavLink>
                    </ul>
                </div>
                <div className="navbar-end ">
                    <Link className='btn px-6' to='/login'>Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar; 