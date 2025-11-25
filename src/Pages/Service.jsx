import React from 'react';
import usePetData from '../Hooks/usePetData';
import Loader from '../Components/Loader';
import PetCard from '../Components/PetCard';
import toast, { Toaster } from 'react-hot-toast';

const Service = () => {
    const { pets, loader } = usePetData();

    const handleBook = (e) => {
        e.preventDefault()
        toast.success('Booked Successfully')
        e.target.reset()
    }

    return (
        <div >
            <Toaster/>
            <h1 className='text-center font-bold text-3xl mt-[50px] mb-[15px] '>Our Services</h1>
            {
                loader ? <Loader></Loader> :
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 px-[20px] lg:px-[80px] mb-[90px]'>
                        {
                            pets.map(pet => <PetCard key={pet.id} pet={pet}></PetCard>)
                        }
                    </div>
            }

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

export default Service;