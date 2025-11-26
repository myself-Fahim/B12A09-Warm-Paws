import React from 'react';
import Slider from '../Components/Slider';
import usePetData from '../Hooks/usePetData';
import PetCard from '../Components/PetCard';
import PetExperts from '../Components/PetExperts';
import Loader from '../Components/Loader';

const petExperts = [
    {
        "name": "Dr. Hasan Karim",
        "fieldRelatedToPetCare": "Veterinary Medicine (Small Animals)",
        "experience": "5 years",
        "image": "https://i.ibb.co.com/R4kfVmsw/premium-photo-1661492071612-98d26885614a-fm-jpg-q-60-w-3000-ixlib-rb-4-1.jpg"
    },
    {
        "name": "Dr. Steve Martin",
        "fieldRelatedToPetCare": "Pet Nutrition & Dietary Planning",
        "experience": "4 years",
        "image": "https://i.ibb.co.com/mFyRFzvP/ai-generated-a-man-in-a-white-coat-holding-a-small-dog-photo.jpg"
    },
    {
        "name": "Dr. Mark Austin",
        "fieldRelatedToPetCare": "Animal Behavior & Training",
        "experience": "6 years",
        "image": "https://i.ibb.co.com/FLx9xj9J/medium-shot-doctor-using-his-tablet-23-2148231325.jpg"
    }
]

const Home = () => {
    const { pets, loader } = usePetData()

    return (
        <div className='mb-[70px]'>
            <Slider></Slider>
            {
                loader ? <Loader></Loader>
                    :
                    <section className='mt-[60px] '>
                        <h1 className='text-center font-bold text-2xl mb-[40px]'>Popular Winter Care Services</h1>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 lg:px-20'>
                            {
                                pets.slice(0, 6).map(pet => <PetCard key={pet.serviceId} pet={pet}></PetCard>)
                            }
                        </div>
                    </section>
            }

            <section className='my-[90px]'>
                <h1 className='text-center font-bold text-2xl mb-[40px]'>Winter Care Tips For Pets </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-5 lg:px-20 text-justify '>
                    <div className='bg-base-300 p-6 border border-black rounded-[14px] shadow-lg '>
                        <h1 className='text-3xl'>🏠</h1>
                        <h1 className='my-[10px] font-bold text-black text-xl'>Warmth & Shelter</h1>
                        <p className='text-[1rem] text-[grey]'>Keep your pet comfortably warm, especially during cold nights. Provide cozy bedding away from drafts, consider pet-safe sweaters for short-haired or small breeds, and never leave pets outside for long periods. Outdoor pets need insulated, dry shelters with wind protection.</p>
                    </div>

                    <div className='bg-base-300 p-6 border border-black rounded-[14px] shadow-lg'>
                        <h1 className='text-3xl'>🚰</h1>
                        <h1 className='my-[10px] font-bold text-black text-xl'>Winter Nutrition & Hydrationr</h1>
                        <p className='text-[1rem] text-[grey]'>Cold weather can increase energy needs, so some pets may require slightly more food—especially active or outdoor ones. Always keep fresh (not frozen) water available, and watch for reduced drinking in winter since dehydration can still happen indoors with heaters running.</p>
                    </div>

                    <div className='bg-base-300 p-6 border border-black rounded-[14px] shadow-lg'>

                        <h1 className='text-3xl'>🐾</h1>
                        <h1 className='my-[10px] font-bold text-black text-xl'>Paw, Skin & Coat Protection</h1>
                        <p className='text-[1rem] text-[grey]'>Snow, ice, and road salt can irritate paws and skin. Wipe paws and belly after walks, trim fur between paw pads to reduce ice buildup, and use pet-safe balm if paws crack. Regular brushing helps maintain coat health and prevents dry, flaky skin.</p>
                    </div>

                    <div className='bg-base-300 p-6 border border-black rounded-[14px] shadow-lg'>
                        <h1 className='text-3xl'>⚠️</h1>
                        <h1 className='my-[10px] font-bold text-black text-xl'>Safe Exercise & Seasonal Hazards</h1>
                        <p className='text-[1rem] text-[grey]'>Pets still need movement, but winter surfaces can be slippery and dangerous. Shorten walks in extreme cold, avoid frozen lakes or salted sidewalks, and warm up indoors if needed. Also keep pets away from antifreeze, heaters, and holiday décor that can be toxic or cause burns</p>
                    </div>

                </div>
            </section>


            <section className='mt-[60px]'>
                <h1 className='font-bold text-2xl text-center mb-[30px]'>Meet Our Expert Vets</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 lg:px-20'>
                    {
                        petExperts.map(expert => <PetExperts key={expert.name} expert={expert}></PetExperts>)
                    }
                </div>
            </section>

        </div>
    );
};

export default Home;