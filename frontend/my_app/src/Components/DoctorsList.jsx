import React, { useEffect, useState } from "react";
import meimg from '../assets/doctorhead.png';
import doctor from '../assets/doctor1.jpg';
import doctor2 from '../assets/doctor2.jpg';
import doctor3 from '../assets/doctor3.jpg';
// import doctor4 from '../assets/doctor4.jpg';
import axios from "axios";






const DoctorsList = () => {


    let [data,setData] = useState([])
    const getData =async()=>{

        const response = await axios.get('http://localhost:5000/api/getpost')
        console.log(response.data.data)
        setData(response.data.data)

      }
     useEffect(()=>{
        console.log("hello")
        getData()
     },[])




  let doctorslist = [
    {
      name: "Dr Bilal Ahmed",
      Categories: "lorem epsom",
      image:doctor
    },
    {
      name: "Dr Minhaj",
      Categories: "lorem epsom",
      image:meimg
    },
    {
      name: "Dr Ayan Ahmed",
      Categories: "lorem epsom",
      image:doctor2
    },
    {
      name: "Dr Aliya",
      Categories: "lorem epsom",
      image:doctor
    },
    {
        name: "Dr Bilal Ahmed",
        Categories: "lorem epsom",
        image:doctor
      },
      {
        name: "Dr Minhaj",
        Categories: "lorem epsom",
        image:meimg
      },
      {
        name: "Dr Ayan Ahmed",
        Categories: "lorem epsom",
        image:doctor2
      },
      {
        name: "Dr Aliya",
        Categories: "lorem epsom",
        image:doctor
      },
      {
        name: "Dr Bilal Ahmed",
        Categories: "lorem epsom",
        image:doctor
      },
      {
        name: "Dr Minhaj",
        Categories: "lorem epsom",
        image:meimg
      },
      {
        name: "Dr Ayan Ahmed",
        Categories: "lorem epsom",
        image:doctor2
      },
      {
        name: "Dr Aliya",
        Categories: "lorem epsom",
        image:doctor
      },
  ];
  return (
    <div className="mt-5">
      <div className="text-center text-[2rem] font-bold">
        OUR TALENTED STAFF
      </div>
      <div className="flex  justify-center gap-3 w-[95%]  mx-auto">
        {data.map((element,index) => {
          return (
            <div className="w-[400px] bg-blue-gray-200 h-[20rem] ">
                <div><img src={doctorslist[index].image} alt="" /></div>
              <div className="text-center font-bold flex items-center justify-center">{element.full_name}</div>
              <div className="text-center font-bold" >Phone No: {element.phone_no}</div>
              <div className="text-center font-bold" >Ratings: {element.rating}</div>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DoctorsList;
