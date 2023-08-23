"use client"
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/all";
import * as THREE from "three";


gsap.registerPlugin(MotionPathPlugin);

export default function ToolsAndLanguagesComponent() {

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            const newX = (screenWidth - screenWidth / 4.8) / 2;
            const scaleFactor = screenWidth < 768 ? 0.5 : 0.7;

            gsap.set(".m1_stage", {x: screenWidth > 868 ? newX + 150 : newX + 150, y: 300, opacity:1, scale: scaleFactor});
        };
        handleResize()

        window.addEventListener('resize', handleResize)

        const mainOne = document.querySelector(".main1");
        const m1cGroup = document.querySelectorAll(".m1_cGroup");

        const handleMouseMove = (e) => {
            gsap.to('.m1_cGroup', {duration:1, x:function(i){return (e.clientX/window.innerWidth)/(i+1)*150}, y:function(i){return i*-20*(e.clientY/(window.innerHeight*150))}, rotation:Math.random()*0.1, overwrite:'auto'});
            gsap.to('.c1_solid, .c1_line', {duration:1, attr:{opacity:1.1-0.75*(e.clientY/window.innerHeight)}})
            gsap.to('.m1OrbBlank', {duration:1, opacity:0.2+0.55*(e.clientY/window.innerHeight)})
        }

        gsap.timeline({defaults:{duration:45}})
            .from('.main1',         {duration:1, autoAlpha:0, ease:'power1.inOut'}, 0)
            .fromTo('.m1_cGroup',   {opacity:0}, {duration:0.3, opacity:1, stagger:-0.1}, 0)
            .from('.m1_cGroup',     {duration:2.5, scale:-0.3, transformOrigin:'50% 50%', stagger:-0.05, ease:'elastic'}, 0)

            .add('orbs', 1.2)
            .add(function(){
                mainOne.addEventListener('mousemove', handleMouseMove);

                mainOne.addEventListener('click', function(e){
                    if (gsap.getProperty('.m1_cGroup','scale')!=1) return;
                    for (var i=0; i<m1cGroup.length; i++){
                    gsap.fromTo(m1cGroup[i], {transformOrigin:'50% 50%', scale:1},{duration:0.7-i/25, scale:0.9, ease:'back.in(10)', yoyo:true, repeat:1}) 
                    }    
                });

                mainOne.addEventListener('mouseleave', function (e) {
                    gsap.to([".m1_cGroup", ".c1_solid", ".m1OrbBlank"], { duration: 1, clearProps: 'all' });
                });
            }, 'orbs+=0.5')


            .fromTo('.orb1',  {xPercent:-35, yPercent:-5},{motionPath:{
                path: function(){return MotionPathPlugin.convertToPath( '.c1_line1',false )[0] },
                start: 1.03,
                end: 1.22
            }, ease:'none', yoyo:true, repeat:-1}, 'orbs')

            .fromTo('.orb2',  {xPercent:-45, yPercent:-10},{motionPath:{
                path: function(){return MotionPathPlugin.convertToPath( '.c1_line2',false )[0] },
                start: 0.98,
                end: 1.2
            }, ease:'none', yoyo:true, repeat:-1}, 'orbs')

            .fromTo('.orb2b',  {xPercent:-45, yPercent:-10},{motionPath:{
                path: function(){return MotionPathPlugin.convertToPath( '.c1_line2',false )[0] },
                start: 1.18,
                end: 1.5
            }, ease:'none', yoyo:true, repeat:-1}, 'orbs')

            .fromTo('.orb3',  {xPercent:-50, yPercent:-15},{motionPath:{
                path: function(){return MotionPathPlugin.convertToPath( '.c1_line3',false )[0] },
                start: 1.06,
                end: 1.31
            }, ease:'none', yoyo:true, repeat:-1}, 'orbs')

            .fromTo('.orb3b',  {xPercent:-50, yPercent:-25},{motionPath:{
                path: function(){return MotionPathPlugin.convertToPath( '.c1_line3',false )[0] },
                start: 1.49,
                end: 1.65
            }, ease:'none', yoyo:true, repeat:-1}, 'orbs')

            .fromTo('.orb3c',  {xPercent:-45, yPercent:-15},{motionPath:{
                path: function(){return MotionPathPlugin.convertToPath( '.c1_line3',false )[0] },
                start: 0.65,
                end: 1
            }, ease:'none', yoyo:true, repeat:-1}, 'orbs')

            .fromTo('.orb3d',  {xPercent:-45, yPercent:-15},{motionPath:{
                path: function(){return MotionPathPlugin.convertToPath( '.c1_line4',false )[0] },
                start: 0.85,
                end: 1.2
            }, ease:'none', yoyo:true, repeat:-1}, 'orbs')

            .fromTo('.orb4',  {xPercent:-50, yPercent:-25},{motionPath:{
                path: function(){return MotionPathPlugin.convertToPath( '.c1_line4',false )[0] },
                start: 1.14,
                end: 1.26
            }, ease:'none', yoyo:true, repeat:-1}, 'orbs')

            .fromTo('.orb4b',  {xPercent:-50, yPercent:-25},{motionPath:{
                path: function(){return MotionPathPlugin.convertToPath( '.c1_line4',false )[0] },
                start: 1.41,
                end: 1.6
            }, ease:'none', yoyo:true, repeat:-1}, 'orbs')

            .fromTo('.orb4c',  {xPercent:-50, yPercent:-25},{motionPath:{
                path: function(){return MotionPathPlugin.convertToPath( '.c1_line4',false )[0] },
                start: 1.56,
                end: 1.8
            }, ease:'none', yoyo:true, repeat:-1}, 'orbs')

            .fromTo('.orb4d',  {xPercent:-50, yPercent:-25},{motionPath:{
                path: function(){return MotionPathPlugin.convertToPath( '.c1_line4',false )[0] },
                start: 1.26,
                end: 1.6
            }, ease:'none', yoyo:true, repeat:-1}, 'orbs')

            .fromTo('.m1Orb', {scale:0, transformOrigin:'50% 50%'}, {duration:0.8, scale:1.5, ease:'back.out(3)', stagger:0.15, overwrite:'auto'}, 'orbs')
            .fromTo('.m1OrbBlank', {opacity:0}, {duration:0.8, opacity:function(i){return 0.2+i/7}, stagger:0.1, overwrite:'auto'}, 'orbs')
            .fromTo('.m1OrbBlank', {x:function(i){return (620-i/4*380) % window.innerWidth - 500}, transformOrigin:function(i){return -((620-i/4*380) % window.innerWidth - 500)+'px 0px'}, rotation:function(i){return [99,-10,55,110,120][i]}}, {rotation:'+=75', yoyo:true, repeat:-1}, 'orbs')
        });    

    return (
        <section className="w-[90vw] m-auto mt-20">
            <h1 className="text-[40px] text-center font-broken">Tools & Languages.</h1>
            <svg className="main1 h-[60vh] sm:h-[90vh] w-[100%] m-auto cursor-pointer">
                <defs>
                    <linearGradient id="grad1" x1="50%" y1="0%" x2="50%" y2="100%">
                        <stop offset="10%" style={{ stopColor: 'rgb(160, 32, 240)', stopOpacity: 0.9 }} />
                        <stop offset="99%" style={{ stopColor: 'rgb(255, 0, 157)', stopOpacity: 0.1 }} />
                    </linearGradient>
                </defs>
            
                <g className="m1_stage" opacity="1">
                    <g className="m1_cGroup">
                        <circle className="m1OrbBlank" cx="0" cy="50" r="50" fill="#1290ff" />

                        <circle className="c1_line c1_line4" cx="0" cy="50" r="270" fill="none" stroke-width="2" stroke="url(#grad1)" opacity="0.4" />
                        <g className="m1Orb orb4c">
                            <image href="/Icons/jsIcon.svg" alt="jsvascript" />
                        </g>

                        <g className="m1Orb orb4b">
                            <image href="/Icons/c-original.svg" alt="C" />
                        </g>

                        <g className="m1Orb orb4d">
                            <image href="/Icons/giticon.svg" alt="git" />
                        </g>

                        <g className="m1Orb orb4">
                            <image href="/Icons/html5.svg" alt="html" />
                        </g>
                    </g>
                    <g className="m1_cGroup">
                        <circle className="m1OrbBlank" cx="0" cy="50" r="25" fill="#983334" />

                        <circle className="c1_line c1_line3" cx="0" cy="50" r="210" fill="none" stroke-width="2" stroke="url(#grad1)" opacity="0.4" />

                        <g className="m1Orb orb3c">
                            <image href="/Icons/python.svg" alt="python"/>
                        </g>

                        <g className="m1Orb orb3d">
                            <image href="/Icons/django.svg" alt="django"/>
                        </g>

                        <g className="m1Orb orb3b">
                            <image href="/Icons/react.svg" alt="react" />
                        </g>

                        <g className="m1Orb orb3">
                            <image href="/Icons/tailwind.svg" alt="tailwind" />
                        </g>
                    </g>
                    <g className="m1_cGroup">
                        <circle className="m1OrbBlank" cx="0" cy="50" r="15" fill="#653997" />

                        <circle className="c1_line c1_line2" cx="0" cy="50" r="180" fill="none" stroke-width="2" stroke="url(#grad1)" opacity="0.5" />
                        <g className="m1Orb orb2">
                            <image href="/Icons/bootstrap.svg" alt="bootstrap"/>
                        </g>

                        <g className="m1Orb orb2b">
                            <image href="/Icons/mysql.svg" alt="mysql"/>
                        </g>
                    </g>

                    <g className="m1_cGroup">
                        <circle className="c1_solid" cx="0" cy="50" r="110" fill="url(#grad1)" opacity="0.4" />
                    </g>
                    <g className="m1_cGroup">
                        <circle className="c1_solid" cx="0" cy="50" r="80" fill="url(#grad1)" opacity="0.5" />
                    </g>
                    <g className="m1_cGroup">
                        <circle className="c1_solid" cx="0" cy="50" r="40" fill="#a020f0" opacity="0.6" />
                    </g>
                </g>
            </svg>
        </section>
    )
}