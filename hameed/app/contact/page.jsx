import React from "react";
import Link from "next/link";
import RotatingSphereComponent from "@/components/threejsComponents/rotatingSphere";


export default function ContactPage() {
    return (
        <div>
            <div className="flex pt-5 pl-3 sm:pt-0 sm:pl-0 sm:fixed top-20 items-center gap-4 sm:-rotate-90 cursor-pointer text-white hover:text-gray-400">
                <div className="p-[1px] w-6 bg-white hover:bg-gray-400"></div>
                <Link href="/"><p>HOME</p></Link>
            </div>
            <h1 className="text-[60px] pt-10 font-broken max-w-max m-auto">CONTACT</h1>
            <div className="max-w-[90%] sm:max-w-[70%] m-auto flex flex-col sm:flex-row justify-between font-mont">
                <div className="mt-20 max-w-[500px] m-auto">
                    <p>
                        Whether you&apos;re looking to build a cutting-edge 
                        web application or seeking a dedicated developer to join your team, I&apos;m excited to connect 
                        and explore how we can work together.
                    </p>
                    <div className="mt-10">
                        <p>Email: <Link href="mailto:osilajaabdulhameed@gmail.com" className="underline">osilajaabdulhameed@gmail.com</Link></p>
                        <div className="flex flex-col mt-1">
                            Socials:
                            <div className="flex items-center gap-3">
                                <div className="p-[1px] w-6 bg-white hover:bg-gray-400"></div>
                                <Link href="https://twitter.com/HameedOsilaja" className="underline"> TW/X </Link>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-[1px] w-6 bg-white hover:bg-gray-400"></div>
                                <Link href="https://twitter.com/HameedOsilaja" className="underline"> IN </Link>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-[1px] w-6 bg-white hover:bg-gray-400"></div>
                                <Link href="https://github.com/Osilaja78" className="underline"> GH </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <RotatingSphereComponent />
            </div>
        </div>
    );
};