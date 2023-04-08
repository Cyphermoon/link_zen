import Link from "next/link";


interface FooterLinksProps {
    title: string
    href: string
}

export const FooterLink = ({ title, href }: FooterLinksProps) => {
    return (
        <Link href={href} className="text-primary text-sm hover:text-primary-300 cursor-pointer hover:underline-offset-1 hover:underline">{title}</Link>
    );
};
