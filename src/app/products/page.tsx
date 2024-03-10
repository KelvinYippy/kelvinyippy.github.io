import { ProjectCard } from "@/components/ProjectCard"
import sofifa_api from "@/../public/sofifaapi.png"
import simulator from "@/../public/simulator.png"

const ProductPage = () => {

    return (
        <div className="w-screen h-3/4 overflow-scroll">
            <div className="font-bold text-3xl sm:text-6xl text-center w-10/12 w-screen">
                Check out products I&apos;ve worked on!
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-4 place-items-center">
                <ProjectCard
                    projectImage={sofifa_api}
                    projectName="SoFIFA-API"
                    projectDescription="A scraper API that enables collection of information from SoFIFA, including data about players and teams."
                    projectLink="https://github.com/KelvinYippy/sofifa-api"
                />
                <ProjectCard
                    projectImage={simulator}
                    projectName="Soccer Simulator"
                    projectDescription="A simulator that allows users to search up soccer teams and simulate a match using EAFC ratings and information."
                    projectLink="https://github.com/KelvinYippy/simulator/"
                />
            </div>
        </div>
    )

}

export default ProductPage