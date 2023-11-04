import React from 'react'
import meimg from '../assets/doctorhead.png';
import DoctorsList from './DoctorsList';

const Coverpage = () => {
  return (
    <>
    <section className='flex items-center w-[80%] justify-center  mx-auto'>

        <div className='w-[50%] '>
            <div className='text-[3rem] font-bold'>CHOOSE THE </div>
            <div className='text-[3rem] font-bold'>DOCTOR</div>
            <div className='w-[50%]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum ipsamet fugit dolorem atque nobis ullam inventore facilis laborpedita.</div>
        </div>
        <div className='  flex justify-center items-center h-[90vh]'>
            <img src={meimg} alt=""  className='w-[50vw] rounded-lg'/>
        </div>
       
    </section>
    
    <section> 
        <div>
             <DoctorsList/>
        </div>
    </section>
</>
  )
}

export default Coverpage