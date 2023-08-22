"use client"
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SphereComponent from "@/components/threejsComponents/sphere";
import ProjectsComponent from "@/components/project/projectComponent";
import mathEase from "../../public/Images/math_ease.png";
import dropSwift from "../../public/Images/drop_swift.png";
import yuriBlog from "../../public/Images/yuri_blog.png";
import Tag from "@/components/project/projectTags";
import Link from "next/link";


export default function ProjectsPage() {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const accordions = document.querySelector(".accordions");
        const accordion = document.querySelectorAll(".accordion");
        const text = document.querySelectorAll(".text");

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: accordions,
                pin: true,
                start: 'top 20px',
                end: 'bottom top',
                scrub: 1,
                ease: 'linear',
            }
        })

        // tl.to(text, {
        //     height: 0,
        //     paddingBottom: 0,
        //     opacity: 0,
        //     stagger: .2,
        // })
        tl.to(accordion, {
            marginBottom: -395,
            stagger: .5,
        }, '<')
    })

    return (
        <div className="projects-main">
            <div className="flex pt-5 pl-3 sm:pt-0 sm:pl-0 sm:fixed top-20 items-center gap-4 sm:-rotate-90 cursor-pointer text-white hover:text-gray-400">
                <div className="p-[1px] w-6 bg-white hover:bg-gray-400"></div>
                <Link href="/"><p>HOME</p></Link>
            </div>
            <p className="text-center text-[60px] pt-10">PROJECTS</p>
            <div className="grid grid-cols-5">
                <div className="hidden sm:block sm:col-span-2 sm:relative">
                    <div className="fixed max-w-[400px]">
                        <SphereComponent />
                        {/* <div className="p-32 bg-white"></div> */}
                    </div>
                </div>
                <div className="col-span-5 sm:col-span-3">
                    <div id="content h-[80vh] overflow-y-scroll">
                        <div className="spacer"></div>
                        <div className="accordions mx-10 sm:mx-0">
                            <div className="accordion">
                                <ProjectsComponent
                                    name="MathEase"
                                    img={mathEase}
                                    ghUrl="https://github.com/Osilaja78/MathEase-Frontend"
                                    desc="This is project mathEase, a website that solves maths using computational intelligence."
                                />
                                <div className="projects-tag flex flex-wrap gap-2">
                                    <Tag name="Frontend" />
                                    <Tag name="Backend" />
                                    <Tag name="NextJs" />
                                    <Tag name="Python" />
                                    <Tag name="FastAPI" />
                                </div>
                            </div>
                            <div className="accordion">
                                <ProjectsComponent
                                    name="DropSwift"
                                    img={dropSwift}
                                    ghUrl="https://github.com/Osilaja78/DropSwift"
                                    desc="DropSwift is an E-commerce website where 
                                    users can add products to cart, complete orders, update 
                                    address. It has an Admin Interface."
                                />
                                <div className="projects-tag flex flex-wrap gap-2">
                                    <Tag name="Fullstack" />
                                    <Tag name="E-commerce" />
                                    <Tag name="AWS" />
                                    <Tag name="NextJs" />
                                    <Tag name="FastAPI" />
                                </div>
                            </div>
                            <div className="accordion">
                                <ProjectsComponent
                                    name="YuriBlog"
                                    img={yuriBlog}
                                    desc="YuriBlog is a blogging website built with Django. Features include: admin user authentication,
                                    rich text edtior for admin to compose blog posts, and so on."
                                />
                                <div className="projects-tag flex flex-wrap gap-2">
                                    <Tag name="Fullstack" />
                                    <Tag name="Python" />
                                    <Tag name="Blog" />
                                    <Tag name="Django" />
                                </div>
                            </div>
                            <div className="accordion">
                                <ProjectsComponent
                                    name="Portfolio website V1"
                                    img={mathEase}
                                    desc="First version of my portfolio website."
                                />
                                <div className="projects-tag flex flex-wrap gap-2">
                                    <Tag name="Frontend" />
                                    <Tag name="NextJs" />
                                    <Tag name="Portfolio" />
                                    <Tag name="GSAP" />
                                    <Tag name="ThreeJs" />
                                </div>
                            </div>
                            <div className="accordion">
                                <ProjectsComponent
                                    name="DropSwift"
                                    img={dropSwift}
                                    ghUrl="https://github.com/Osilaja78/DropSwift"
                                    desc="DropSwift is an E-commerce website where 
                                    users can add products to cart, complete orders, update 
                                    address. It has an Admin Interface."
                                />
                                <div className="projects-tag flex flex-wrap gap-2">
                                    <Tag name="Fullstack" />
                                    <Tag name="E-commerce" />
                                    <Tag name="AWS" />
                                    <Tag name="NextJs" />
                                    <Tag name="FastAPI" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}