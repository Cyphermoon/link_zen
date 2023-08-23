import { useModal } from "@/hooks/index.hook";
import { copyTextToClipboard } from "@/utils";
import { DialogClose, DialogContent, DialogTitle } from "@radix-ui/react-dialog";
import { FaCopy } from "react-icons/fa";
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
import BaseDialog from "../modals/BaseModal";

interface Props extends Omit<SocialShareModalProps, "type" | "callback" | "description"> {
    sendResult: (id: ModalId, result: boolean) => void
}

const ShareSocials = ({ url, id, title, twitter, sendResult }: Props) => {
    const { isOpen, closeModal } = useModal(true);

    function handleClose(result: boolean) {
        return () => {
            sendResult(id, result)
            closeModal()
        }
    }

    const SIZE = 40;

    return (
        <BaseDialog state={isOpen} closeModal={handleClose(false)} closeOnBackgroundClicked={true}>
            <DialogContent
                className='bg-white text-primary-800 w-11/12 max-w-xs rounded-2xl fixed z-[100] top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%] p-5 animate-contentShow'>

                <div className="flex items-center justify-between mb-4">
                    <DialogTitle className={`text-lg font-medium`}>Share Your Link</DialogTitle>
                    <DialogClose className="text-xl lg:text-lg font-bold text-red-500 rounded-full outline-none" onClick={handleClose(false)}>
                        <RxCross1 />
                    </DialogClose>
                </div>

                <div className="flex flex-row flex-wrap items-center justify-between mb-8">
                    <TwitterShareButton
                        title={title}
                        url={url}
                        hashtags={twitter.hashtags}
                        related={twitter.related} >
                        <TwitterIcon size={SIZE} round={true} />
                    </TwitterShareButton>
                    <WhatsappShareButton
                        title={title}
                        url={url}>
                        <WhatsappIcon size={SIZE} round={true} />
                    </WhatsappShareButton>
                    <LinkedinShareButton
                        title={title}
                        url={url}
                    >
                        <LinkedinIcon size={SIZE} round={true} />
                    </LinkedinShareButton>
                    <TelegramShareButton
                        title={title}
                        url={url}>
                        <TelegramIcon size={SIZE} round={true} />
                    </TelegramShareButton>
                    <FacebookShareButton
                        title={title}
                        url={url} >
                        <FacebookIcon size={SIZE} round={true} />
                    </FacebookShareButton>
                </div>

                <div>
                    <h2 className="text-lg font-medium mb-4">Link Url</h2>
                    <div className="flex items-center justify-between py-2.5 px-3 rounded-xl space-x-1.5 bg-primary">
                        <p className="text-sm w-11/12 overflow-x-scroll hide-scrollbar">{url}</p>
                        <button
                            className="text-xl lg:text-lg" title="Copy Link"
                            onClick={() => copyTextToClipboard(url)}>
                            <FaCopy />
                        </button>
                    </div>
                </div>
            </DialogContent>
        </BaseDialog>
    )
}

export default ShareSocials