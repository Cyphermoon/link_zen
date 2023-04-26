import Link from "next/link";
import { IconType } from "react-icons";

interface SocialIconProps {
    Icon: IconType;
    title: string;
    href: string
    className?: string
}
export const SocialIcon = ({ Icon, title, className, href }: SocialIconProps) => {
    return (
        <Link href={href}>
            <Icon title={title} className={`${className} transition-colors duration-300 text-xl  `} />
        </Link>
    );
};
