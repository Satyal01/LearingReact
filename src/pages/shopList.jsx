import React from "react";
import { useState } from "react";
import { ImCross, ImFeed } from "react-icons/im";


function ShopList(){
    const [List, setList] = useState([]);
    const [item, setItem] = useState("");


    function add(){
        if(List.includes(item) || item.length===0){return}
        let newList = [...List, item];
        setItem("");
        setList(newList);

    }

    function remove(i){
        let newList = List.filter((item,index)=>{
            if (i!==index){
                return item;
            }
        })

        setList(newList);
    }

    function handleChange(e){
        let newitem = e.target.value;
        setItem(newitem);
        
    }

    

    return(
    <div className="h-screen bg-blue-50 flex flex-col  justify-start items-center p-8 gap-10">
        <h1 className="text-4xl font-semibold  tracking-wider  ">Shoping List</h1>
        <div className="h-auto w-[20rem] p-4 border-2 border-white  flex flex-col items-center gap-2">
            <p className="p-2 text-2xl font-medium">item to buy</p>
            <div className="flex  gap-2">
                <input type="text" onChange={handleChange} autoFocus value={item} />
                <button onClick={add} className="outline-none bg-blue-200 rounded-lg px-2 ">Add</button>
                
            </div>

            {
                List.map((i,position)=>{
                    return (
                <div key={position} className=" flex w-[15rem] px-2 justify-between">
                    <p >
                        {i}
                    </p>
                    <button onClick={()=>{ remove(position)}}><ImCross className="fill-red-500" /></button>
                </div>
                    )
                })
            }
            

        </div>
    </div>)
}


export default ShopList;