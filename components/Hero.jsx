import Image from "next/image";
import MobileNav from "./MobileNav";
import NavLinks from "./NavLinks";

export default function Hero() {
    return (
        <>
            <MobileNav />
        
        <div className="flex h-70 lg:h-screen">
            <div className="flex  flex-col justify-center lg:justify-between">
                <div className="w-[80vw]  p-8 hidden lg:flex  items-center justify-between px-10">
                    <div>
                        <Image src={"/Images/docLogo.png"} alt="logo" width={180} height={100}></Image>
                    </div>
                    

                <NavLinks />

                </div>
                <div className="p-8 flex flex-col gap-4">
                    <h1 className="w-full lg:w-[50%] text-4xl lg:text-6xl">Take care of yours family’s <span className="text-blue-500">health.</span> </h1>
                    <p className="w-full lg:w-[35%]">All in one destination for COVID-19 health queries.  Consult 10,000+ health workers about your concerns.</p>
                    <button className="bg-[#EC5863] w-40 text-white py-2 px-4">GET STARTED</button>
                </div>
                <div className="p-8 flex items-center gap-4">
                    <Image src={"/Images/play.png"} alt={"play"} width={50} height={50} />
                    <div>
                        <h2>Stay safe with GoCorona</h2>
                        <h3>Watch Video</h3>
                    </div>

                </div>
            </div>

            <div className="hidden lg:block w-[20vw]  bg-[#EC5863] rounded-l-4xl text-right p-8">
                <button className="bg-[#4285F4] text-white py-2 px-4">Download</button>
            </div>
            <div>
                <Image src={"/Images/doc.png"} width={500} height={500} alt="doc image" className="hidden lg:block lg:absolute top-50 right-20"></Image>
            </div>
        </div>
        


        </>
    );
}