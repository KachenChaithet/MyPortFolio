import Card from "./Card"

const ShowProject = () => {
    return (
        <div className="w-full flex justify-center flex-col items-center gap-2">
            <h1 className="font-semibold text-xl">Featured Projects</h1>
            <p className="text-gray-500">Here are some of my recent projects that showcase my skills and experience</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}
export default ShowProject