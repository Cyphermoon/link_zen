import PageHead from '@/components/common/PageHead'
import { nunito, poppins, roboto } from 'font'



type AvailableFontsType = "roboto" | "poppins" | "nunito"

interface Props {
    className?: string
    font?: AvailableFontsType
    children: React.ReactNode
    metadata?: {
        title?: string,
        description?: string,
        ogImage?: string
        author?: string
    }
}

const RootLayout = ({ className, children, metadata, font = "roboto" }: Props) => {
    // default to roboto font 
    let fontClass = {
        poppins: poppins.className,
        roboto: roboto.className,
        nunito: nunito.className
    }[font]

    return (
        <main className={`${fontClass} ${className}`}>
            <PageHead
                title={metadata?.title || "LinkZen"}
                description={metadata?.description}
                author={metadata?.author}
                ogImage={metadata?.ogImage} />
            {children}
        </main>
    )
}

export default RootLayout