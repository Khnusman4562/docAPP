"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function MobileNav() {
    const [toggle, setToggle] = useState(false)

    return (
        <>
            <div className="px-8 py-4 border-b border-gray-100 flex lg:hidden justify-between">
                <div onClick={() => setToggle(true)}>
                    <Image src={"/Images/menus.png"} alt="menu" width={30} height={30} />

                </div>

                <button className="bg-[#4285F4] text-white py-2 px-4">Download</button>
            </div>
            <div className={`w-60 h-screen bg-white border border-gray-400 fixed lg:hidden top-0 left-0
    transform transition-transform duration-300 ease-in-out
    ${toggle ? "translate-x-0" : "-translate-x-full"}`}>
                <div className=" text-2xl w-full p-2 flex justify-end" onClick={() => setToggle(!toggle)}>
                    <h1 className="border border-black px-4 py-2">X</h1>
                </div>
                <div className="flex flex-col gap-6 mt-6 p-6">
                    <Link href={"/"} className="border-b transition-colors duration-300 cursor-pointer">Home</Link>
                    <Link href={"/features"} className="border-b transition-colors duration-300 cursor-pointer">Features</Link>
                    <Link href={"/support"} className="border-b transition-colors duration-300 cursor-pointer">Support</Link>
                    <Link href={"/contact"} className="border-b transition-colors duration-300 cursor-pointer">Contact</Link>
                </div>

            </div></>
    );
}