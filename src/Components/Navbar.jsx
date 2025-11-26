import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router';
import AuthContext from '../AuthContext/AuthContext';
import { signOut } from 'firebase/auth';
import auth from '../Firebase/firebase.init';
import toast, { Toaster } from 'react-hot-toast';

const Navbar = () => {
    const { user } = useContext(AuthContext)
    const [showName, setShowName] = useState(false)
    console.log(user)
    const handleSignOut = () => {
        signOut(auth)
            .then(() => toast.success('Logout Successfully'))
            .catch((error) => toast.error(error.message))
    }
    return (
        <div className='bg-slate-500 px-[20px] lg:px-[70px]'>
            <Toaster></Toaster>
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
                <div className="navbar-center mr-5 lg:mr-0 hidden lg:flex">
                    <ul className=" px-1 text-white font-bold">
                        <NavLink to='/' className='mr-5'>Home</NavLink>
                        <NavLink to='/service' className='mr-5'>Service</NavLink>
                        <NavLink to='/profile' className='mr-5' >My Profile</NavLink>
                    </ul>
                </div>






                <div className="navbar-end flex gap-5 lg:gap-10">

                    {
                        user && <div className=' relative  rounded-full flex items-center justify-center gap-3'>
                            <div onMouseEnter={() => setShowName(true)} onMouseLeave={() => setShowName(false)} className='h-[45px] w-[45px]  '>
                                <img className='h-full w-full rounded-full' src={user.photoURL} alt="" />
                            </div>

                            {showName && (
                                <p className="absolute top-[50px] left-1/2 -translate-x-1/2 bg-black text-white text-sm rounded px-3 py-1 whitespace-nowrap shadow">
                                    {user.displayName}
                                </p>
                            )}


                        </div>
                    }

                    {
                        user ? <Link onClick={handleSignOut} className='btn px-6' to='/login'>Log Out</Link> :
                            <Link className='btn px-6' to='/login'>Login</Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar; 