import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, Navigate, useNavigate } from 'react-router';
import auth from '../Firebase/firebase.init';
import AuthContext from '../AuthContext/AuthContext';
import Loader from '../Components/Loader';
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {

    const navigator = useNavigate()
     
    const {user,setUser,loader} = useContext(AuthContext);
    console.log(user)

    const handleCreateUser = (e) =>{
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        const name = e.target.name.value
        const photo = e.target.photo.value
        createUserWithEmailAndPassword(auth,email,password)
         .then((result) => {
            updateProfile(result.user,{
                displayName:name,
                photoURL:photo
            })
            setUser(result.user)
            e.target.reset()
            navigator('/')
        })
        .catch(error => toast.error(error.message))
    }

    return (

        loader ? <Loader></Loader>:
        <div>
            <Toaster></Toaster>
            <div className='min-h-screen flex items-center justify-center'>
                <form onSubmit={handleCreateUser}>
                    <h1 className='text-center text-slate-500 text-3xl font-bold mb-4'>Sign Up</h1>
                    <fieldset className="fieldset shadow-2xl py-8 border-base-300 rounded-box w-xs border p-4">

                        <label className="label font-bold">Name</label>
                        <input type="text" name='name' className="input " placeholder="Your Name" />

                        <label className="label font-bold">Email</label>
                        <input type="email" name='email' className="input " placeholder="Email" />


                        <label className="label font-bold">Photo URL</label>
                        <input type="text" name='photo' className="input " placeholder="URL" />

                        <label className="label font-bold">Password</label>
                        <input type="password" name='password' className="input " placeholder="Password" />

                        <button className="btn btn-neutral bg-slate-500 border-none hover:transition ease-in-out mt-4">Sign up</button>


                        <p className='text-center mt-[10px]'>Already have an account? <Link to='/login' className='font-bold underline'>Login</Link></p>

                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;