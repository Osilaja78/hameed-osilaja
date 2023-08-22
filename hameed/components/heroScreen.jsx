"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import lofiPc from "../public/Images/lofi_pc.jpg";
import loifMusic from "../public/Images/lofi_music.jpg";
import landscapeOne from "../public/Images/landscape_1.jpg";
import landscapeTwo from "../public/Images/landscape_2.jpg";
import { gsap } from "gsap";


export default function HomeScreenComponent() {

    useEffect(() => {
        const topDiv = document.querySelector('.parallax-top');
        const bottomDiv = document.querySelector('.parallax-bottom');

        function parallax() {
            var yPos = 0 - window.scrollY/5;
        
            topDiv.style.top = 1 - yPos / 4 + "%";
            bottomDiv.style.top = 10 + yPos / 25 + "%";
        }
        
        window.addEventListener("scroll", function(){
            parallax();
        });

        gsap.fromTo(topDiv, {y: 150, autoAlpha: 0}, {y: 0, autoAlpha: 1, duration: 1.8, ease: "back.out(1.7)"})
    }, []);


    return (
        <section className="max-w-[90%] sm:max-w-[70%] m-auto">
            <div className="parallax-section parallax-top relative text-center text-[60px] sm:text-[110px] mt-10 break-words">
                <p className="max-w-max m-auto">A&nbsp;
                <span className="clamp relative -z-1">Creative
                      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 842.14 500">
                        <path class="draw" d="M336.2,130.05C261.69,118,16.52,122,20.65,244.29c4.17,123,484.3,299.8,734.57,108.37,244-186.65-337.91-311-546.54-268.47" fill="none" stroke="#8486aa" stroke-miterlimit="10" stroke-width="8" />
                      </svg>
                    </span>
                     &nbsp;Web Developer.
                </p>
            </div>

            <div className="parallax-section parallax-bottom m-auto max-w-[90%] m-atuo relative max-h-max text-black text-[80px] mt-[100px] sm:mt-[200px]">
                <div className="flex flex-wrap items-center gap-10 max-w-max m-auto">
                    <Image src={landscapeTwo} alt="lofi" className="rounded-xl -z-10 w-[240px]"/>
                    <Image src={lofiPc} alt="lofi" className="rounded-xl -z-10 hidden md:hidden sm:block w-[240px]"/>
                    <Image src={landscapeOne} alt="lofi" className="rounded-xl -z-10 hidden sm:block w-[240px]"/>
                </div>
                <i className="text-gray-300 text-center text-[20px]">&quot;I Love Nature&quot;</i>
            </div>
        </section>
    )
}