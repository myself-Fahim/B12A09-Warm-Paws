import React from 'react';
import usePetData from '../Hooks/usePetData';
import Loader from '../Components/Loader';
import PetCard from '../Components/PetCard';
import toast, { Toaster } from 'react-hot-toast';

const Service = () => {
    const { pets, loader } = usePetData();

  

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

          
        </div>
    );
};

export default Service;