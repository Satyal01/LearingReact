import React from "react";
import { useState, useEffect } from "react";




function Quote(){
    const [quotes, setQuotes] = useState([]);
    const [quote , setQuote] = useState(null);

    useEffect(()=>{
        fetch("https://type.fit/api/quotes")
        .then((res)=>{
            return res.json();
        }).then((data)=>{
            setQuotes(data);
            setQuote(data[0]);
        }).catch((err)=> console.log(err))
    },[]);

    
    function handleClick(){
        const value = Math.floor(Math.random()* 15);

        setQuote(quotes[value]);
    }


    return (
        <div className="h-screen flex justify-center  items-center">
            <div className="rounded-lg drop-shadow-lg bg-gray-50 h-[18rem] w-[30rem] text-center pt-5 px-5">
                <div className=" mb-8 " >
                    <button className="text-white h-8 w-12 drop-shadow-md rounded-lg bg-blue-300 relative active:scale-95 "
                    onClick={handleClick}>New</button>
                </div>
                <div className=" p-5">
                    <h1 className="tracking-wide text-xl my-4 font-semibold font-sans">“{quote?.text}</h1>
                    <p className="text-md font-light italic">-{quote?.author}</p>
                </div>
            </div>
    
        </div>
    )
}


export default Quote;