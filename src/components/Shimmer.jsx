
const Shimmer = ()=>{
    return (
        <>
        

           <div className="flex flex-wrap gap-5 justify-evenly">
            
           {Array(8).fill("").map((e,index)=>{
          return <CardShimmer key ={index} />
                
                   
                })}
           </div>
        </>
    )
}

export default Shimmer



const CardShimmer = () => {
    return (
      <div className="basis-[300px] mob:basis-[150px] p-2.5 mb-2.5 shadow animate-pulse">
        <div className="h-[144px] w-[230px] bg-yellow-200 mob:w-[130px] mob:h-[81px]"></div>
        <div className="w-3/5 mt-2.5 h-[15px]  bg-yellow-200 "></div>
        <div className="w-4/5 mt-1 h-[15px]  bg-yellow-200"></div>
        <div className="w-full mt-[18px] h-[15px]  bg-yellow-200"></div>
      </div>
    );
  }
  
  
  
  
