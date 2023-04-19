interface NavItem {
    text: string
    href: string
}

type NavItemProps = NavItem & {
    type?: "link" | "button"
    tabIndex?: number
    color:string
}
