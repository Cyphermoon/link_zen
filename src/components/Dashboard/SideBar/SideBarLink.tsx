import Link from "next/link"

interface SidebarLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string
    content: React.ReactNode
}

const SidebarLink = ({ href, content, className, ...props }: SidebarLinkProps) => {
    return (
        <Link href={href} className={`text-gray-700 text-xs ease-out transition-colors duration-300 hover:bg-accent/10 hover:text-gray-600 cursor-pointer block w-full py-1 px-4 backdrop-blur-sm  ${className}`} {...props}>
            {content}
        </Link>

    )
}

export default SidebarLink