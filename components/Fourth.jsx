import Image from "next/image"
export default function Fourth(){
    return(
        
        <div className="px-8 lg:px-0 grid grid-cols-1 gap-4 lg:flex lg:justify-center lg:gap-40 lg:items-center">
            <div className="flex flex-col gap-6">
                <h1 className="text-4xl lg:text-6xl ">Talk to <span className="text-blue-400">experts.</span> </h1>
                <h3 className="w-full  lg:w-[25vw] font-light">Book appointments or submit queries into thousands of forums concerning health issues and prevention against noval Corona Virus.</h3>
                <button className="bg-[#EC5863] text-white px-4 py-2 w-30">Features</button>
            </div>
            <div className="">
                <Image src={"/Images/forth.png"} alt={"forth"} width={500} height={500}/>
            </div>
        </div>
    )
}