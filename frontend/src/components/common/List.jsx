import React from "react"


const obj=[{
    name:'Mark 1',
    color:'#f9c74f',
   
},
{
    name:"Mark 2",
    color:'rgb(00,255,00)',
  
},
{
    name:'Mark 3',
    color:'rgb(54,162,235)',
    
},
{
    name:'Mark 4',
    color:'rgb(255,00,06)',
},
{
    name:'Mark 5',
    color:'rgb(160,32,240)',
}


]
export default function List(){
    return(
        <div className="flex flex-col py-6 gap-3">
            <h1 className="py-4 font-bold text-xl"></h1>
                {obj.map((v,i)=><Transaction key={i} category={v}></Transaction>)}
               
        


        </div>
    )
}
function Transaction({category}){
    if(!category) return null;
    return(
        <div className="item flex justify-center bg-gray-50 py-2 rounded-r" style={{borderRight: `8px solid ${category.color ?? "#e5e5e5"}`}}>
            <button className="px-3">icons</button>
            <span className="block w-full text-black">{category.name ?? ''}</span>

        </div>
    )
}