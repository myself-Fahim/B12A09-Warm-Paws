import { sendPasswordResetEmail } from 'firebase/auth';
import React from 'react';
import { useParams } from 'react-router';
import auth from '../Firebase/firebase.init';
import toast, { Toaster } from 'react-hot-toast';

const ForgotPass = () => {
    const {email} = useParams()

    const handleReset = (e) =>{
        e.preventDefault()
        sendPasswordResetEmail(auth,email)
        .then(()=>{
            window.open('https://mail.google.com/mail/u/0/#inbox')
        })
        .error((error) =>{
               toast.error(error.message)
        })

    }
   
    return (
        <div className='w-fit mx-auto mt-[150px]'>
            <Toaster></Toaster>
            <form onSubmit={handleReset}>
                <fieldset className="fieldset shadow-2xl py-8 border-base-300 rounded-box w-xs border p-4">

                    <label className="label font-bold">Email</label>
                    <input defaultValue={email} type="email" name='email' className="input " placeholder="Email" />

                    <button  className="btn btn-neutral bg-slate-500 border-none hover:transition ease-in-out mt-4">Reset Password</button>
 
                </fieldset>
            </form>
        </div>
    );
};

export default ForgotPass;