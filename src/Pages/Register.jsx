import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div>
            <div className='min-h-screen flex items-center justify-center'>
                <form>
                    <h1 className='text-center text-slate-500 text-3xl font-bold mb-4'>Sign Up</h1>
                    <fieldset className="fieldset shadow-2xl py-8 border-base-300 rounded-box w-xs border p-4">

                        <label className="label font-bold">Name</label>
                        <input type="text" className="input " placeholder="Your Name" />

                        <label className="label font-bold">Email</label>
                        <input type="email" className="input " placeholder="Email" />


                        <label className="label font-bold">Photo URL</label>
                        <input type="text" className="input " placeholder="URL" />

                        <label className="label font-bold">Password</label>
                        <input type="password" className="input " placeholder="Password" />

                        <button className="btn btn-neutral bg-slate-500 border-none hover:transition ease-in-out mt-4">Sign up</button>


                        <p className='text-center mt-[10px]'>Already have an account? <Link to='/login' className='font-bold underline'>Login</Link></p>


                       

                    </fieldset>

                </form>
            </div>
        </div>
    );
};

export default Register;