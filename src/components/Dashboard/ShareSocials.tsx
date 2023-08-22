import BaseDialog from "../modals/BaseModal";
import { DialogClose, DialogContent, DialogTitle } from "@radix-ui/react-dialog";
import { RxCross1 } from "react-icons/rx";
import {
    FacebookIcon,
    FacebookShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    TelegramIcon,
    TelegramShareButton,
    TwitterIcon,
    TwitterShareButton,
    WhatsappIcon,
    WhatsappShareButton
} from "react-share";
import { useBoolean } from "usehooks-ts";
import { FaCopy } from "react-icons/fa";

interface Props {
    url: string
}

const ShareSocials = ({ url }: Props) => {
    const { value, toggle } = useBoolean(true)

    return (
        <BaseDialog state={value} closeModal={toggle} closeOnBackgroundClicked={false}>
            <DialogContent
                className='bg-white text-primary-800 w-11/12 max-w-xs rounded-2xl fixed z-[100] top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%] p-5 animate-contentShow'>

                <div className="flex items-center justify-between mb-4">
                    <DialogTitle className={`text-lg font-medium`}>Share Your Link</DialogTitle>
                    <DialogClose className="text-xl lg:text-lg font-bold text-red-500 rounded-full">
                        <RxCross1 />
                    </DialogClose>
                </div>

                <div className="flex flex-row flex-wrap items-center justify-between mb-8">
                    <TwitterShareButton
                        title='LinkZen Dashboard'
                        via='moon_cypher'
                        url='https://cyphermoon.vercel.app'
                        hashtags={['linkzen', 'sass']}
                        related={['linkzen_', 'moon_cypher']} >
                        <TwitterIcon size={40} round={true} />
                    </TwitterShareButton>
                    <WhatsappShareButton
                        title='LinkZen Dashboard'
                        url='https://cyphermoon.vercel.app' >
                        <WhatsappIcon size={40} round={true} />
                    </WhatsappShareButton>
                    <LinkedinShareButton
                        title='LinkZen Dashboard'
                        url='https://cyphermoon.vercel.app'
                    >
                        <LinkedinIcon size={40} round={true} />
                    </LinkedinShareButton>
                    <TelegramShareButton
                        title='LinkZen Dashboard'
                        url='https://cyphermoon.vercel.app' >
                        <TelegramIcon size={40} round={true} />
                    </TelegramShareButton>
                    <FacebookShareButton
                        title='LinkZen Dashboard'
                        url='https://cyphermoon.vercel.app' >
                        <FacebookIcon size={40} round={true} />
                    </FacebookShareButton>
                </div>

                <div>
                    <h2 className="text-lg font-medium mb-4">Link Url</h2>
                    <div className="flex items-center justify-between py-2.5 px-3 rounded-xl space-x-1.5 bg-primary">
                        <p className="text-sm w-11/12 overflow-x-scroll hide-scrollbar">{url}</p>
                        <button className="text-xl lg:text-lg" title="Copy Link"><FaCopy /></button>
                    </div>
                </div>
            </DialogContent>
        </BaseDialog>
    )
}

export default ShareSocials