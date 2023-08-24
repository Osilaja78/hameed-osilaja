import React from "react";
import Image from "next/image";
import Link from "next/link";
import ghIcon from "../../public/Icons/ghIcon.svg";
import linkedIn from "../../public/Icons/linkedin.svg";
import twitter from "../../public/Icons/twitter-x.svg";


export default function Footer() {
    return (
        <section className="p-10">
            <hr className="border-1 border-gray-50 opacity-[0.5]"/>
            {/* <h1 className="first-letter:text-4xl first-letter:text-red-700">FOOTER</h1> */}
            <div className="flex gap-5 max-w-max m-auto items-center mt-4">
                <Link href="https://www.github.com/Osilaja78" target="_blank"><Image src={ghIcon} alt="github" /></Link>
                <Link href="https://www.linkedin.com/in/abdul-hameed-osilaja-85041823a" target="_blank"><Image src={linkedIn} alt="github" /></Link>
                <Link href="https://twitter.com/HameedOsilaja" target="_blank"><Image src={twitter} alt="twitter" className=" -ml-2" /></Link>
            </div>
            <div className="max-w-max m-auto mt-2">
                <p>&copy; 2023 | 🧡 Hameed Osilaja</p>
            </div>
        </section>
    )
}