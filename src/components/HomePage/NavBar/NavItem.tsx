import Button from "@/components/common/Button"
import Link from "next/link"

const NavItem = ({ text, href, type = "link", tabIndex = 0, color }: NavItemProps) => {
    if (type === "button") {
        return <Button text={text} href={href} />
    }

    return <Link tabIndex={tabIndex} href={href} className={`${color} text-base`}>{text}</Link>

}

export default NavItem
