import Link from "next/link"
import { NavItemProps } from "./type"

const NavItem = ({ text, href, tabIndex = 0, color, active }: NavItemProps) => {

    return <Link title={text} tabIndex={tabIndex} href={href} className={`${color} text-base ${active ? "underline font-bold" : ""} hover:underline hover:font-medium transition-all duration-150`}>
        {text}
    </Link>

}

export default NavItem
