
interface FeaturedListProps {
    bgColor: string,
    icon: string,
    text: string
}

export function FeaturedList({ bgColor, icon, text }: FeaturedListProps) {
    return (
        <li className="flex gap-2 my-3 items-center">
            <span className={`${bgColor} rounded-full flex items-center justify-center w-9 h-9`}>
                <img src={icon} alt="Ícone" width={16} height={16} />
            </span>
            <p className="font-roboto text-text-m">{text}</p>
        </li>
    );
}
