const Navbar = () => {
    const menu = [
        { title: 'Home', path: '' },
        { title: 'Project', path: '' },
        { title: 'Skill', path: '' },
        { title: 'Contact', path: '' },
    ]
    return (
        <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
                <h1 className="font-semibold text-xl cursor-pointer">KC</h1>
                <ul className="flex items-center font-medium gap-8">
                    {menu.map((item) => (
                        <li key={item.id } className="text-gray-500 hover:text-black cursor-pointer">{item.title}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default Navbar