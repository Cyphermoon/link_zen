export interface NavItem {
    text: string
    href: string
}

export type NavItemProps = NavItem & {
    tabIndex?: number
    color:string
    active?: boolean
}
