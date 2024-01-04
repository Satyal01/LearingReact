import React from "react";
import {useState} from "react";

function QAS({question, answer}){
    const [flag, setFlag] = useState(false);
    console.log(flag);
    
    function handleChlick(){
        setFlag(!flag);
    }

    return (
        <div className="border-2 w-full p-2 flex flex-col justify-between bg-white gap-2">
            <div className="flex  justify-between px-2">
                <h4  className="inline text-lg font-semibold ">{question} </h4>
                <div className="border-2 block h-8 w-8 flex justify-center items-center rounded-md bg-purple-100 border-blue-700 "> 
                    <button onClick={handleChlick}>+</button>
                </div>
            </div>
            { flag && (<div className="px-2">
                <p>{answer}</p>
            </div>)}
        </div>
    );
}


export default QAS;