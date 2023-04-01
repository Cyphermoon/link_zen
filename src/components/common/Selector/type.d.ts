//TODO: optimize the types structure

interface SelectorProp {
    id: string,
    handleChangeId: (id: string) => void
    triggerChildren: React.ReactNode
    label: string
    children: React.ReactNode
}


interface SelectItemProp {
    value: string
    children: React.ReactNode
}

interface SortSelectorProp {
    id: string
    handleChangeId: (id: string) => void
    options: any[]
    selectedOption: any
}

interface ViewSelectorProps {
    id: string
    handleChangeId: (id: string) => void
    options: any[]
    selectedOption: any 
}