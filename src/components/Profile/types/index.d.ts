interface Props {
    title: string
    id: number
    description: string
    imageUrl: string
    descOpened?: boolean
    handleDescChanged: (id: number) => void
}

interface ToolBarItemProps {
    value: string,
    children: React.ReactNode
}

interface ContextMenuItemProps {
    title: string,
    children: React.ReactNode
}