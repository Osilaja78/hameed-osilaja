"use client"
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

export default function HomeScreenComponent() {

    return (
        <section className="w-[90%] sm:w-[70%] m-auto">
            <div className="text-center text-[150px] pb-20">
                <p>
                <span className="clamp relative -z-1">Creative
                      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 842.14 500">
                        <path class="draw" d="M336.2,130.05C261.69,118,16.52,122,20.65,244.29c4.17,123,484.3,299.8,734.57,108.37,244-186.65-337.91-311-546.54-268.47" fill="none" stroke="#8486aa" stroke-miterlimit="10" stroke-width="8" />
                      </svg>
                    </span>
                     Web Developer.
                </p>
                <div className="stack-container text-black text-[80px]">
                    <div className="fe p-24 border bg-white"><p>FE</p></div>
                    <div className="be p-24 border bg-white">BE</div>
                    <div className="fs p-24 border bg-white">FS</div>
                </div>
            </div>
            
            <div className="images flex gap-5 max-w-max m-auto">
                
                {/* <div className="p-24 border bg-white"></div> */}
                {/* <img data-speed="clamp(2.4)" src='https://images.unsplash.com/photo-1530569673472-307dc017a82d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODM2NTUwMDA&ixlib=rb-4.0.3&q=80&w=400' alt=''>
                <img data-speed="clamp(1.8)" src='https://images.unsplash.com/photo-1439853949127-fa647821eba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODM2NTQ5Njk&ixlib=rb-4.0.3&q=80&w=400' alt=''>
                <img data-speed="clamp(2.2)" src='https://images.unsplash.com/photo-1551376347-075b0121a65b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODM2NTQ5MTE&ixlib=rb-4.0.3&q=80&w=400' alt=''>
                <img data-speed="clamp(1.5)" src='https://images.unsplash.com/photo-1500817487388-039e623edc21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODM2NTQ5MTE&ixlib=rb-4.0.3&q=80&w=400' alt=''> */}
              </div>
        </section>
    )
}