"use client"
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { horizontalLoop } from "@/utils/gsapHelpers";


export default function InfifityScrollingText() {

    useEffect(() => {
        console.clear();
        gsap.utils.toArray(".scroll_text_all").forEach((line, i) => {
            const speed = 2;
          
            const links = line.querySelectorAll("p");
            const tl = horizontalLoop(links, { speed: speed, reversed: true, repeat: -1 });
          
            links.forEach((link) => {
                link.addEventListener("mouseenter", () =>
                    gsap.to(tl, { timeScale: 0, overwrite: true })
                );
                link.addEventListener("mouseleave", () =>
                    gsap.to(tl, { timeScale: -1, overwrite: true })
                );
            });
          });
    });

    return (
        <div className="flex overflow-hidden my-20">
            <div className="scroll_text_all flex items-center align-middle flex-nowrap gap-5 text-[20px] font-mont w-[100%]">
                <p className="border rounded-full p-3 min-w-max ml-5">Startups</p>
                <p className="border rounded-full p-3 min-w-max">Frontend Development</p>
                <p className="border rounded-full p-3 min-w-max">Startups</p>
                <p className="border rounded-full p-3 min-w-max">Fullstack Development</p>
                <p className="border rounded-full p-3 min-w-max">SEO</p>
                <p className="border rounded-full p-3 min-w-max">Internships</p>
                <p className="border rounded-full p-3 min-w-max">Developer</p>
                <p className="border rounded-full p-3 min-w-max">Backend Development</p>
                <p className="border rounded-full p-3 min-w-max">Mentorship</p>
                <p className="border rounded-full p-3 min-w-max">Technical Writing</p>
            </div>
        </div>
    )
}