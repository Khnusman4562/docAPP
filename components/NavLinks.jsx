"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks(){
const pathname = usePathname();

    return(
        <div className="flex gap-8">
                        <Link href="/" className={`hover:text-red-700 hover:underline ${pathname === "/" ? "underline" : ""}`}>Home</Link>
                        <Link href="/features" className="hover:text-red-700 hover:underline">Features</Link>
                        <Link href="/contactus" className="hover:text-red-700 hover:underline">Contact Us</Link>
                    </div>
    );
}