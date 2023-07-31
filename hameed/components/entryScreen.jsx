"use client"
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";


gsap.registerPlugin(Flip);

export default function EntryScreenAnimation() {
    
    useEffect(() => {
        let layouts = ["final", "plain", "columns", "grid"],
		container = document.querySelector(".container"),
		curLayout = 0,
        iteration = 0;

        function nextState() {
            console.log("Inside next state...");
            if (iteration < 4) {
                const state = Flip.getState(".letter, .gsap", {props: "color,backgroundColor", simple: true}); // capture current state
        
                container.classList.remove(layouts[curLayout]); // remove old class
                curLayout = (curLayout + 1) % layouts.length;   // increment (loop back to the start if at the end)
                iteration += 1;
                container.classList.add(layouts[curLayout]);    // add the new class
        
                Flip.from(state, { // animate from the previous state
                    absolute: true,
                    stagger: 0.07,
                    duration: 1,
                    ease: "power2.inOut",
                    spin: curLayout === 0, // only spin when going to the "final" layout
                    simple: true,
                    onEnter: (elements, animation) => gsap.fromTo(elements, {opacity: 0}, {opacity: 1, delay: animation.duration() - 0.1}),
                    onLeave: elements => gsap.to(elements, {opacity: 0})
                });
        
                gsap.delayedCall(curLayout === 0 ? 3.5 : 1.5, nextState);
            }
            else {
                container.classList.add("hidden");
            }
        }
        
        gsap.delayedCall(1, nextState);
    }, []);

    return (
        <div className="container final">
            <div className="letter F">H</div>
            <div className="letter l">a</div>
            <div className="letter i">m</div>
            <div className="letter p">e</div>
            <div className="letter p">e</div>
            <div className="letter p">d</div>
            <div className="gsap">&nbsp;OSILAJA</div>
        </div>
    )
}