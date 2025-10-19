import axios from "axios";
import Card from "./Card"
import { useContext, useEffect, useState } from "react";
import { ProjectContext } from "../utils/ProjectContext";

const ShowProject = () => {
    const { projects } = useContext(ProjectContext)
    
    return (
        <div className="w-full flex justify-center flex-col items-center gap-2">
            <h1 className="font-semibold text-xl">Featured Projects</h1>
            <p className="text-gray-500">Here are some of my recent projects that showcase my skills and experience</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {projects.map((item, index) => (
                    <Card key={index} stacks={item.stack} nameproject={item.nameproject} description={item.description} githubUrl={item.githubUrl} imageUrl={item.imageUrl} demoUrl={item.demoUrl} />
                ))}
            </div>
        </div>
    )
}
export default ShowProject