import PageHead from '@/components/common/PageHead'
import { nunito, poppins, roboto } from 'font'
import DialogManager from '../modals/ModalManager'



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
        <main className={`${fontClass} ${className} text-primary-800`}>
            <PageHead
                title={metadata?.title || "LinkZen"}
                description={metadata?.description}
                author={metadata?.author}
                ogImage={metadata?.ogImage} />

            {children}
            <input readOnly type="text" id="copyText" className='w-0 h-0 pointer-events-none absolute top-[-999px] left-[-999px] opacity-0' tabIndex={0} />
        </main>
    )
}

export default RootLayout