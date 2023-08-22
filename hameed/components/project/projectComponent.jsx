import React from "react";
import Image from "next/image";
import Link from"next/link";
import externalLink from "../../public/externalLink.svg";

export default function ProjectsComponent({ name, img, desc, ghUrl }) {
    return (
        <div>
            <div className="title">
                {name}
            </div>
            <Image src={img} alt="project-image" className="rounded-md" />
            <div className="flex gap-2 items-center mt-2">
                <Link href={ghUrl ? ghUrl : 'https://github.com/Osilaja78'} target="blank">GitHub</Link>
                <Image src={externalLink} alt="external-link" />
            </div>
            <div className="text mt-3">
                {desc}
            </div>
        </div>
    )
}