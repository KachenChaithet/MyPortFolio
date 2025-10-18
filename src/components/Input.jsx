const Input = ({ title, placeholder, type = 'text', value, onChange, name }) => {
    return (
        <div className="w-full">
            <h1 className="font-medium">{title}</h1>
            <input name={name} type={type} value={value} onChange={onChange} className="bg-gray-100 w-full py-2 rounded-xl pl-2 outline-0 focus:ring-2 focus:ring-[#d3d3d3] " placeholder={placeholder} />
        </div>
    )
}
export default Input