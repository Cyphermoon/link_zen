
type CommonSelectorProp = {
    id: string,
    handleChangeId: (id: string) => void
}

interface SortOptionProps {
    id: string;
    leftIcon: IconType;
    title: string;
    order?: "asc" | "desc";
    type: string
    rightIcon: IconType | string;
}

interface ViewOptionProps {
    id: string;
    leftIcon: IconType;
    title: string;
}


interface SelectItemProp {
    value: string
    children: React.ReactNode
}

type SelectorProp = CommonSelectorProp & {
    triggerChildren: React.ReactNode
    label: string
    children: React.ReactNode
}


type SortSelectorProp = CommonSelectorProp & {
    options: SortOptionProps[]
    selectedOption: SortOptionProps | undefined
}

type ViewSelectorProps = CommonSelectorProp & {
    id: string
    handleChangeId: (id: string) => void
    options: ViewOptionProps[]
    selectedOption: ViewOptionProps | undefined
}