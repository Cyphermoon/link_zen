import { getUrlDomain } from "@/utils/link"
import Link from "next/link"

interface UrlDomainProps {
    url: string
    className?: string
}

const UrlDomain = ({ url, className = "" }: UrlDomainProps) => {
    return (
        <Link href={url} className={`text-gray-700 underline text-xs ${className}`} >
            {getUrlDomain(url)}
        </Link >
    )
}

export default UrlDomain