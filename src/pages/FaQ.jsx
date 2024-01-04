import React from "react";
import QAS from './QAS.jsx'

const obj = [
    {
        id : 1,
        ques : "is this a good product?",
        ans  : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aut nostrum veniam cupiditate velit nemo hic, delectus itaque sit sunt! Nulla placeat accusantium natus fugit quo dolor. A, nemo? Itaque.",
    },
    {   
        id :2,
        ques:"how much does it cost ?",
        ans:  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aut nostrum veniam cupiditate velit nemo hic, delectus itaque sit sunt! Nulla placeat accusantium natus fugit quo dolor. A, nemo? Itaque.",

    },
    {
        id : 3,
        ques:"when can i get it?",
        ans :" Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aut nostrum veniam cupiditate velit nemo hic, delectus itaque sit sunt! Nulla placeat accusantium natus fugit quo dolor. A, nemo? Itaque.",

    }
]


function FaQ(){
    
    return (
        <div className="h-screen  flex flex-col justify-start pt-[2rem] items-center gap-8  ">
            <h1 className="text-4xl font-bold font-sans tracking-wider">
                Project 2: FAQ/Accordion
            </h1>
            <div className="w-[30rem]  p-4 relative flex flex-col gap-4 items-center  
             bg-blue-700 rounded-lg">
                <div className="text-xl font-semibold text-white ">
                    <h4>Frequently asked questions </h4>
                </div>
                {
                   obj.map((i)=>{
                    return <QAS key={i.id} question={i.ques} answer={i.ans} />
                   })
                }
            </div>
        </div>
    )
}


export default FaQ;