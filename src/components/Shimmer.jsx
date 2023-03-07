







const Shimmer = ()=>{
    return (
        <>
        <div className="flex justify-center">
        <div className="w-1/2 px-4 relative search-container flex justify-center bg-[#FFF8E1] p-5 my-5">
        <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
                <input 
                type="text" 
                className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-xl outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                placeholder=" search for restaurants and food   " 
                
            />
            <button
            className="search-btn p-2 m-2 bg-green-900 hover:bg-yellow-700 text-white rounded-md"
            
            >
                Search
            </button>
            </div>
          </div>

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
  
  
  
  
