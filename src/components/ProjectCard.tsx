'use client'

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image"

interface ProjectCardProps {
    projectImage: StaticImport;
    projectName: string;
    projectDescription: string;
    projectLink: string;
}

export const ProjectCard = ({projectImage, projectName, projectDescription, projectLink}: ProjectCardProps) => {

    return (
        <div className="max-w-md md:max-w-sm rounded overflow-hidden shadow-lg cursor-pointer hover:scale-110 transition ease-in-out delay-110" onClick={() => window.open(projectLink, "_blank")}>
            <Image className="w-full" src={projectImage} alt={projectName}/>
            <div className="px-6 py-4 bg-slate-300">
                <div className="font-bold text-xl mb-2">{projectName}</div>
                <p className="text-gray-700 text-base">
                    {projectDescription}
                </p>
            </div>
            {/* <div className="px-6 pt-4 pb-2 bg-slate-300">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div> */}
        </div>
    )

}