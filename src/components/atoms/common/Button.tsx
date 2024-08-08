
const Button=({onClick,label,color}: {onClick: () => void,label?: string; color?: string}) => {
    return <button className={`  text-gray-300 active:text-primary active:bg-fourth p-2 rounded-lg bg-primary font-semibold mt-4 text-sm ${color}`} onClick={onClick}>
        {label}

    </button>;
}

export default Button;