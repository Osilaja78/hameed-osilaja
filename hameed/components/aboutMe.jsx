"use client"
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import me from "../public/me.jpg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";


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
            })

            const aboutTextTl = gsap.timeline({
                scrollTrigger: {
                    trigger: [aboutTextOne, aboutTextTwo, aboutTextThree, aboutTextFour],
                    toggleActions: "restart none none none",
                }
            })

            aboutTl.fromTo(about,
                { x: -150, autoAlpha: 0},
                { x: 0, duration: 1.5, autoAlpha: 1, ease: "Power4.easeInOut"}
            );
            aboutTextTl.fromTo(aboutTextOne,
                { y: 150, autoAlpha: 0 },
                { y: 0, autoAlpha: 1, duration: 1.3, ease: "Power4.easeInOut"}
            );
            aboutTextTl.fromTo(aboutTextTwo,
                { y: 150, autoAlpha: 0 },
                { y: 0, autoAlpha: 1, duration: 1.3, ease: "Power4.easeInOut"}
            );
            aboutTextTl.fromTo(aboutTextThree,
                { y: 150, autoAlpha: 0 },
                { y: 0, autoAlpha: 1, duration: 1.3, ease: "Power4.easeInOut"}
            );
            aboutTextTl.fromTo(aboutTextFour,
                { y: 150, autoAlpha: 0 },
                { y: 0, autoAlpha: 1, duration: 1.3, ease: "Power4.easeInOut"}
            );
        })
        return () => ctx.revert();
    });

    return (
        <section className="about-all sm:flex justify-between max-w-[80%] sm:max-w-[70%] m-auto my-8">
            <div className="about flex flex-col items-center">
                <h1 className="text-[50px]">ABOUT ME</h1>
                <Image src={me} width={180} alt="me" className="rounded-full"/>
            </div>
            <div className="max-w-[500px] flex flex-col gap-10 pt-10">
                <div className="about-text-one">
                    <p className="text-[40px]">
                        Hi, I&apos;m Hameed Osilaja.
                    </p>
                    <p className="text-[30px]">
                        A Creative Developer, Turning Ideas into Digital Reality.
                    </p>
                    <p className="mt-10"><Link href="/projects" className="hover:opacity-50 cursor-pointer">Explore my work -</Link></p>
                </div>
                <p className="about-text-two">
                    My journey in the world of web development began with a fascination for turning ideas into 
                    interactive digital experiences. Over the years, I&apos;ve honed my skills in building solutions 
                    that seamlessly merge creativity with functionality. From translating 
                    design concepts into responsive layouts to architecting robust server-side solutions, 
                    I relish the challenge of creating intuitive, pixel-perfect applications that leave a 
                    lasting impact.
                </p>
                <p className="about-text-three">
                    As a problem solver at heart, I thrive on tackling complex challenges and finding 
                    elegant solutions. Whether it&apos;s optimizing database queries for lightning-fast 
                    performance or incorporating the latest tools and frameworks, I&apos;m committed to pushing 
                    the boundaries of what&apos;s possible.
                    When I&apos;m not immersed in code, you&apos;ll find me exploring the latest trends in tech, experimenting with 
                    new libraries, and collaborating with fellow developers to expand my horizons.
                </p>
                <p className="about-text-four">
                    I&apos;m also a firm believer 
                    in continuous learning, always seeking out opportunities to enhance my skill set and 
                    stay up-to-date with industry best practices.
                    Let&apos;s bring your digital dreams to life! Whether you&apos;re looking to build a cutting-edge 
                    web application or seeking a dedicated developer to join your team, I&apos;m excited to connect 
                    and explore how we can work together.
                </p>
                <p className="about-text-four">Feel free to reach out, and let&apos;s create something amazing 🤗!</p>
            </div>
        </section>
    )
}