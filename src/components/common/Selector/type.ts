import { SelectContentProps } from "@radix-ui/react-select";

export type CommonSelectorProp = {
    id: string,
    handleChangeId: (id: string) => void
    content?: SelectContentProps
}

export interface SortOptionProps {
    id: string;
    leftIcon: React.ReactNode;
    title: string;
    order?: "asc" | "desc";
    type: string
    rightIcon: React.ReactNode | string;
}

export interface ViewOptionProps {
    id: string;
    leftIcon: React.ReactNode;
    title: string;
}

export interface SelectItemProp {
    value: string
    children: React.ReactNode
}

export type SelectorProp = CommonSelectorProp & {
    triggerChildren: React.ReactNode
    label: string
    children: React.ReactNode
}


export type SortSelectorProp = CommonSelectorProp & {
    options: SortOptionProps[]
    selectedOption: SortOptionProps | undefined
}

export type ViewSelectorProps = CommonSelectorProp & {
    id: string
    handleChangeId: (id: string) => void
    options: ViewOptionProps[]
    selectedOption: ViewOptionProps | undefined
}