import { useState } from "react";
const Section=({title, text})=>{

    return (
        <div className=" border-dotted border-4 border-black p-3 m-5">
                    
        <h1 className="font-bold text-black-300 bg-red-300 text-center" >{  title}</h1> 
        {!isvisible? <button className="font-bold underline" onClick={()=>{setisvisible(true)}}>Show</button>:
        <button className="font-bold underline" onClick={()=>{setisvisible(false)}}>Hide</button>}
        <p> {isvisible?text:"" }</p>
        </div>
    )
}
const InstaMart=()=>{
    const [isvisible, setisvisible]=useState(false);
 
    return (
        <>

        <Section title="About" text="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"/>
        <Section title="Career" text="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"/>
        </>
    )
}
export default InstaMart
