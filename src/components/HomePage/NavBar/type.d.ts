interface NavItem {
    text: string
    href: string
}

type NavItemProps = NavItem & {
    tabIndex?: number
    color:string
    active?: boolean
}
