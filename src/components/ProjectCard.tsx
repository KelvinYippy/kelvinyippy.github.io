import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image"

interface ProjectCardProps {
    projectImage: StaticImport;
    projectName: string;
    projectDescription: string;
}

export const ProjectCard = ({projectImage, projectName, projectDescription}: ProjectCardProps) => {

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <Image className="w-full" src={projectImage} alt={projectName}/>
            <div className="px-6 py-4 bg-slate-300">
                <div className="font-bold text-xl mb-2">{projectName}</div>
                <p className="text-gray-700 text-base">
                    {projectDescription}
                </p>
            </div>
            {/* <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div> */}
        </div>
        // <div className="group w-6/12">
        //     <div className="w-12/12 aspect-square rounded-lg bg-gray-200">
        //         <Image
        //             src={projectImage}
        //             alt={projectName}
        //         />
        //     </div>
        //     <h3 className="mt-4 text-sm text-gray-700 dark:invert">{projectName}</h3>
        //     <p className="mt-1 text-lg font-medium text-gray-900 dark:invert">{projectDescription}</p>
        // </div>
        // <a key={product.id} href={product.href} className="group">
        //       <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        //         <img
        //           src={product.imageSrc}
        //           alt={product.imageAlt}
        //           className="h-full w-full object-cover object-center group-hover:opacity-75"
        //         />
        //       </div>
        //       <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
        //       <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
        //     </a>
    )

}