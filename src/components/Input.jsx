const Input = ({title,placeholder}) => {
    return (
        <div>
            <h1 className="font-bold">{title}</h1>
            <input type="text" className="bg-gray-100 w-full py-2 rounded-xl pl-2 outline-0 " placeholder={placeholder} />
        </div>
    )
}
export default Input