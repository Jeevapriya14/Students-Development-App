import React from "react"
const obj=[{
    type:'Mark 1',
    color:'#f9c74f',
    percent:45
},
{
    type:"Mark 2",
    color:'rgb(00,255,00)',
    percent:20
},
{
    type:'Mark 3',
    color:'rgb(54,162,235)',
    percent:10
},
{
    type:'Mark 4',
    color:'rgb(255,00,06)',
    percent:5
},
{
    type:'Mark 5',
    color:'rgb(160,32,240)',
    percent:5
}


]
export default function Labels(){
    
    return(
        <>
        {obj.map((v,i)=><LabelComponent key={i} data={v}></LabelComponent>)}
        </>
    )
}
function LabelComponent({data}){
    if(!data)return<></>;

    return(
        <div className="labels flex justify-between">
            <div className="flex gap-2">
                <div className="w-2 h-2 rounded py-3" style={{background: data.color ?? "#f9c74f"}}> </div>
    
                <h3 className="text-md text-white">{data.type ?? ''}</h3>
            </div>
            <h3 className="font-bold text-white">{data.percent ?? 0}%</h3>
        </div>
    )
}