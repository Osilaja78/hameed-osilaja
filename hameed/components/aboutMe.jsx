"use client"
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import me from "../public/me.jpg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import ArrowRight from "../public/arrowRight.svg";


export default function AboutMeComponent() {

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const about = document.querySelector(".about");
        const aboutTextOne = document.querySelector(".about-text-one");
        const aboutTextTwo = document.querySelector(".about-text-two");
        const aboutTextThree = document.querySelector(".about-text-three");
        const aboutTextFour = document.querySelectorAll(".about-text-four");

        let ctx = gsap.context(() => {
            const aboutTl = gsap.timeline({
                scrollTrigger: {
                    trigger: about,
                    toggleActions: "restart none none none",
                }
            });
            const aboutTextOneTl = gsap.timeline({
                scrollTrigger: {
                    trigger: aboutTextOne,
                    toggleActions: "restart none none none",
                }
            });
            const aboutTextTwoTl = gsap.timeline({
                scrollTrigger: {
                    trigger: aboutTextTwo,
                    toggleActions: "restart none none none",
                }
            });
            const aboutTextThreeTl = gsap.timeline({
                scrollTrigger: {
                    trigger: aboutTextThree,
                    toggleActions: "restart none none none",
                }
            });
            const aboutTextFourTl = gsap.timeline({
                scrollTrigger: {
                    trigger: aboutTextFour,
                    toggleActions: "restart none none none",
                }
            });

            aboutTl.fromTo(about,
                { x: -150, autoAlpha: 0},
                { x: 0, duration: 1.5, autoAlpha: 1, ease: "Power4.easeInOut"}
            );
            aboutTextOneTl.fromTo(aboutTextOne,
                { y: 150, autoAlpha: 0 },
                { y: 0, autoAlpha: 1, duration: 1.3, ease: "Power4.easeInOut"}
            );
            aboutTextTwoTl.fromTo(aboutTextTwo,
                { y: 150, autoAlpha: 0 },
                { y: 0, autoAlpha: 1, duration: 1.3, ease: "Power4.easeInOut"}
            );
            aboutTextThreeTl.fromTo(aboutTextThree,
                { y: 150, autoAlpha: 0 },
                { y: 0, autoAlpha: 1, duration: 1.3, ease: "Power4.easeInOut"}
            );
            aboutTextFourTl.fromTo(aboutTextFour,
                { y: 150, autoAlpha: 0 },
                { y: 0, autoAlpha: 1, duration: 1.3, ease: "Power4.easeInOut"}
            );
        })
        return () => ctx.revert();
    });

    return (
        <section className="about-all flex flex-col lg:flex-row justify-between max-w-[80%] sm:max-w-[70%] m-auto my-8">
            <div className="about flex flex-col items-center">
                <h1 className="text-[40px] sm:text-[50px] font-broken">ABOUT ME</h1>
                <Image src={me} width={180} alt="me" className="rounded-full"/>
            </div>
            <div className="max-w-[500px] m-auto lg:m-0 flex flex-col gap-10 pt-10 font-mont">
                <div className="about-text-one">
                    <p className="text-[40px] font-broken">
                        Hi, I&apos;m Hameed Osilaja.
                    </p>
                    <p className="text-[30px]">
                        A Creative Developer, Turning Ideas into Digital Reality.
                    </p>
                    <p className="mt-10">
                        <Link href="/projects" className="hover:opacity-50 cursor-pointer text-[20px] font-medium flex items-center gap-1 hover:gap-2">
                            Explore my work 
                            <Image src={ArrowRight} alt="arrow-right" />
                        </Link>
                    </p>
                </div>
                <div className="about-text-two">
                    <p className=" opacity-90">
                        My journey in the world of <span className=" font-semibold">web development</span> began with a fascination for turning ideas into 
                        interactive digital experiences. Over the years, I&apos;ve honed my skills in <span className=" font-semibold">building solutions</span> 
                        that seamlessly merge creativity with functionality. From translating 
                        design concepts into <span className=" font-semibold">responsive layouts</span> to <span className=" font-semibold">architecting robust server-side solutions</span>, 
                        I relish the challenge of creating intuitive, pixel-perfect applications that leave a 
                        <span className=" font-semibold"> lasting impact</span>.
                    </p>
                </div>
                <div className="about-text-three">
                    <p className="opacity-90">
                        As a <span className=" font-semibold">problem solver</span> at heart, I thrive on tackling <span className=" font-semibold">complex challenges</span> and finding 
                        elegant solutions. Whether it&apos;s optimizing <span className=" font-semibold">database queries</span> for lightning-fast 
                        performance or incorporating the latest tools and frameworks, I&apos;m committed to pushing 
                        the boundaries of what&apos;s possible.
                        When I&apos;m not immersed in code, you&apos;ll find me exploring the <span className=" font-semibold">latest trends in tech</span>, experimenting with 
                        new libraries, and <span className=" font-semibold">collaborating</span> with fellow developers to expand my horizons.
                    </p>
                </div>
                <div className="about-text-four">
                    <p className="opacity-90">
                        I&apos;m also a firm believer 
                        in <span className=" font-semibold">continuous learning</span>, always seeking out opportunities to enhance my skill set and 
                        stay <span className=" font-semibold">up-to-date</span> with industry best practices.
                        Let&apos;s bring your digital dreams to life!
                    </p>
                </div>
                <div className="about-text-four">
                    <p>
                        Feel free to reach out, and let&apos;s create something amazing 🤗!
                    </p>
                    <Link href="mailto:osilajaabdulhameed@gmail.com">
                        <button className="border-2 white rounded-full p-3 mt-6 hover:bg-white transition duration-200 ease-in-out hover:text-black">CONTACT</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}