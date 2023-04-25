import Button from "@/components/common/Button"
import Link from "next/link"

const NavItem = ({ text, href, type = "link", tabIndex = 0, color, active }: NavItemProps) => {
    if (type === "button") {
        return <Button text={text} href={href} />
    }

    return <Link title={text} tabIndex={tabIndex} href={href} className={`${color} text-base ${active ? "underline font-bold" : ""}`}>{text}</Link>

}

export default NavItem
