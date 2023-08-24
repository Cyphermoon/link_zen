import { AddModal } from "@/components/modals/type";

export interface Confirmation {
    title?: string;
    message?: string;
    dialog?: AddModal
}

export type HandlerFunction = () => void;

