import React from 'react';
import { useParams } from 'react-router';
import usePetData from '../Hooks/usePetData';
import Loader from '../Components/Loader';
import toast, { ToastBar, Toaster } from 'react-hot-toast';

const ServiceDetails = () => {
    const { id } = useParams()
    const { pets, loader } = usePetData()

      const handleBook = (e) => {
            e.preventDefault()
            toast.success('Booked Successfully')
            e.target.reset()
        }

    if (loader)
        return <Loader></Loader>

    const SinglePetData = pets.find(pet => pet.serviceId == id)
    const { serviceId, category, image, description, providerEmail, price, rating, serviceName, slotsAvailable
        , providerName
    } = SinglePetData

    return (
        <div>
            <Toaster></Toaster>
            <section className='p-5 lg:p-20'>
                <div className="hero bg-base-200 py-10 rounded-xl">
                    <div className="hero-content gap-15 flex-col lg:flex-row">
                        <img
                            src={image}
                            className="max-w-xs rounded-lg shadow-2xl"
                        />
                        <div>
                            <h1 className=" text-3xl text-center lg:text-start lg:text-5xl pt-6 font-bold">{serviceName}</h1>
                            <p className="pt-6 text-center font-bold text-xl text-slate-500 lg:text-start">
                                {description}
                            </p>

                            <div className='flex flex-col lg:flex-row py-8 items-center gap-5 lg:gap-10'>
                                <div className='flex flex-col items-center'>
                                    <h1 className='font-bold text-xl lg:text-2xl pb-3'>ID</h1>
                                    <h1 className='font-bold text-slate-500  text-xl'>{serviceId}</h1>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <h1 className='font-bold text-xl lg:text-2xl pb-3'>Category</h1>
                                    <h1 className='font-bold text-slate-500  text-xl'>{category}</h1>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <h1 className='font-bold text-xl lg:text-2xl pb-3'>Available Slots </h1>
                                    <h1 className='font-bold text-slate-500  text-xl'>{slotsAvailable} Slots</h1>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <h1 className='font-bold text-xl lg:text-2xl pb-3'>Rating </h1>
                                    <h1 className='font-bold text-slate-500  text-xl'>{rating}</h1>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <h1 className='font-bold text-xl lg:text-2xl pb-3'>Price </h1>
                                    <h1 className='font-bold text-slate-500  text-xl'>{price} $</h1>
                                </div>
                            </div>


                             <div className='flex flex-col lg:flex-row items-center gap-5  lg:gap-10'>
                                <div className='flex flex-col items-center'>
                                    <h1 className='font-bold text-xl lg:text-2xl pb-3'>Provider Name</h1>
                                    <h1 className='font-bold text-slate-500  text-xl'>{providerName}</h1>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <h1 className='font-bold text-xl lg:text-2xl pb-3'>Provider Email</h1>
                                    <h1 className='font-bold text-slate-500  text-xl'>{providerEmail}</h1>
                                </div>
                        
                            </div>
                        </div>

                    </div>

               
                </div>


            </section>

            
            <div>
                <h1 className='text-center font-bold text-3xl mb-[40px]'>Book Our Service</h1>
                <div className='max-w-[700px] mx-auto mb-[40px] px-5'>
                    <form onSubmit={handleBook} className='w-full '>
                        <fieldset className="fieldset shadow-2xl py-8 border-base-300 rounded-box px-10 border p-4">
                            <label className="label font-bold">Email</label>
                            <input type="email" required className="input w-full" placeholder="Email" />

                            <label className="label font-bold">Password</label>
                            <input type="password" required className="input w-full" placeholder="Password" />


                            <button className="btn btn-neutral bg-slate-500 border-none hover:transition ease-in-out mt-4">Book Now</button>
                        </fieldset>
                    </form>
                </div>

            </div>

        </div>
    );
};

export default ServiceDetails;