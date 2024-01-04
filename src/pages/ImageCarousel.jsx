import React from 'react';
import { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const images = [
    'https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/206648/pexels-photo-206648.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/39574/flower-exotic-colorful-pink-39574.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/40192/woman-happiness-sunrise-silhouette-40192.jpeg?auto=compress&cs=tinysrgb&w=400'
]

function Carousle(){
    
    const [value, setValue] = useState(0);

    function handleClickL(){
        setValue((prev)=>{
            if(prev==0){
                return 4
            }
            return prev - 1;
        })
    }

    function handleClickR(){
        setValue( (prev)=>{
            if( prev==4){
                return 0;
            }
            return prev + 1;
        })
    }


    return (
    <div className='h-[17rem] w-[30rem] flex flex-col justify-start items-center relative top-16 left-16 pt-4 '>
        <div className="w-[28rem] h-[15rem] overflow-hidden">
            <img src={images[value]}
            className='mr-auto ml-auto'
            alt="alyx star" />
            
        </div>            
        <button className='absolute left-0 top-[7rem] w-8 h-8 bg-white rounded-full'
        onClick={handleClickL}
        ><FaAngleLeft size={'2rem'} /></button>
        <button className='absolute right-0 top-[7rem] w-8 h-8 bg-white rounded-full '
        onClick={handleClickR}
        ><FaAngleRight  size={'2rem'} /></button>

    </div>)
}



export default Carousle;