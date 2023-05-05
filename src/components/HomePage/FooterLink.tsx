import Link from "next/link";


interface FooterLinksProps {
    title: string
    href: string
    active?: boolean
}

export const FooterLink = ({ title, href, active }: FooterLinksProps) => {
    return (
        <Link
            href={href}
            className={`text-primary text-sm hover:text-primary-300 cursor-pointer hover:underline-offset-1 hover:underline 
            ${active ? "underline underline-offset-1 text-primary-300" : ""}`}>
            {title}
        </Link>
    );
};
