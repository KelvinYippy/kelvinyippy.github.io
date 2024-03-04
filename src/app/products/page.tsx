import { ProjectCard } from "@/components/ProjectCard"
import sofifa_api from "@/../public/sofifaapi.png"
import simulator from "@/../public/simulator.png"

const ProductPage = () => {

    return (
        <div className="flex flex-col w-screen h-screen items-center justify-center">
            <div className="font-bold text-6xl text-center w-10/12">
                Check out the products I&apos;ve worked on.
            </div>
            <div className="grid grid-cols-2 mt-10 gap-4">
                <ProjectCard
                    projectImage={sofifa_api}
                    projectName="SoFIFA-API"
                    projectDescription="A scraper API that enables collection of information from SoFIFA, including data about players and teams."
                />
                <ProjectCard
                    projectImage={simulator}
                    projectName="Soccer Simulator"
                    projectDescription="A simulator that allows users to search up soccer teams and simulate a match using EAFC ratings and information."
                />
            </div>
            <div className="flex pt-4">
            </div>
        </div>
    )

}

export default ProductPage