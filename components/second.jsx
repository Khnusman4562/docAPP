import Image from "next/image"
export default function Second() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="flex justify-center">
                <Image
                    src="/Images/econd.png"
                    alt="second"
                    width={400}
                    height={300}
                    className="w-58 sm:w-64 md:w-80 lg:w-100 h-auto"
                />            </div>
            <div className="w-100 px-8 lg:px-0 flex flex-col gap-6">
                <h1 className="text-4xl lg:text-6xl">Stay safe with Go <span className="text-[#EC5863]">Corona.</span> </h1>
                <p className="">24x7 Support and user friendly mobile platform to bring healthcare to your fingertips. Signup and be a part of the new health culture.</p>
                <button className="bg-[#EC5863] px-4 py-2 text-white w-40">Features</button>
            </div>
        </div>
    )
}