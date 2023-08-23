"use client"
import EntryScreenAnimation from '@/components/entryScreen';
import Image from 'next/image';
import Hamburger from '../public/hamburger.svg';
import close from "../public/close.svg";
import HomeScreenComponent from '@/components/heroScreen';
import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import AboutMeComponent from '@/components/aboutMe';
import Link from "next/link";
import ToolsAndLanguagesComponent from '@/components/toolsAndLanguages';
import Footer from '@/components/footer/footer';
import InfifityScrollingText from '@/components/infinityScrollText';


export default function Home() {

    const [navOpen, setNavOpen] = useState(false);
    const [animationDone, setAnimationDone] = useState(false);
    const [navCloseRunning, setNavCloseRunning]  = useState(false);

    useEffect(() => {
        const animationTimer = setTimeout(() => {
          setAnimationDone(true);
        }, 9000);

        return () => clearTimeout(animationTimer);
      }, []);

    let container, navItems
    useEffect(() => {
        container = document.querySelectorAll(".together");
        navItems = document.querySelector(".nav-items");

        document.body.style.position = navOpen ? 'fixed' : '';

        if (navOpen === true) {
            gsap.fromTo(
                container,
                { top: "-100%" },
                {
                    top: 0,
                    duration: 0.7,
                    stagger: 0.1,
                }
            );
            gsap.to(
                navItems,
                { opacity: 1, duration: 2, delay: 2}
            )
        }

        if (navOpen === false) {
            gsap.fromTo(
                container,
                { top: 0 },
                {
                    top: "-100%",
                    duration: 0.5,
                    stagger: 0.1,
                }
            );
            gsap.to(
                navItems,
                { opacity: 0, duration: 0.5}
            )
        }
    }, [navOpen]);

    const handleBurgerClick = () => {
        if (navOpen === true) {
            setNavOpen(false);
            setNavCloseRunning(true);
            setTimeout(() => {
                setNavCloseRunning(false);
            }, 1000);
        } else {
            setNavCloseRunning(true);
            setNavOpen(true);
        }
    }

    return (
        <main>
            <EntryScreenAnimation />
            {navCloseRunning === true ?
                <div className='fixed z-10 w-[100%] sm:w-[98.8vw] bg-black bg-opacity-80 backdrop-blur-sm'>
                    <div className="wrapper">
                        <div className="together div2"></div>
                        <div className="together div1"></div>
                        <div className="together div3"></div>
                        <div className="together div4"></div>
                        <div className="together div5"></div>
                        <div className="together div6"></div>
                        <div className="together div7 hidden sm:block"></div>
                        <div className="together div8 hidden sm:block"></div>
                        <div className="together div9 hidden sm:block"></div>
                        <div className="together div10 hidden sm:block"></div>
                        <div className="together div11 hidden sm:block"></div>
                        <div className="together div12 hidden sm:block"></div>
                        <div className="together div13 hidden sm:block"></div>
                    </div>
                    <Image src={close} onClick={handleBurgerClick} alt='hamburger menu' className='absolute top-10 left-5 sm:left-32 cursor-pointer' />
                    <div className="nav-items pt-32 sm:pt-10 text-[60px] sm:text-[135px] font-mont">
                        <ul>
                            <li><Link href="/projects">PROJECTS</Link></li>
                            <li><Link href="https://drive.google.com/file/d/19bG8DFLuFxtmr6sqp05LASWY8aBDRbrE/view?usp=drive_link" target="_blank">RESUME</Link></li>
                            <li><Link href="https://dev.to/osilaja78" target="_blank">BLOG</Link></li>
                            <li><Link href="/contact">CONTACT</Link></li>
                        </ul>
                    </div>
                </div>
            : ''}
            {animationDone && (<div>
                <div className="z-10 w-full items-center justify-between font-mono lg:flex px-10 sm:px-24 py-10">
                    <div className="flex items-center justify-between sm:w-[60%] m-auto border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static rounded-3xl border bg-gray-200 py-2 px-4 lg:dark:bg-zinc-800/30">
                    <p className="text-20px font-kahlil text-[30px]">Hameed</p>
                    <Image src={Hamburger} alt='hamburger menu' onClick={handleBurgerClick} />
                    </div>
                </div>
                <HomeScreenComponent />
                <AboutMeComponent />
                <InfifityScrollingText />
                <ToolsAndLanguagesComponent />
                <Footer />
            </div>)}
        </main>
    )
}
