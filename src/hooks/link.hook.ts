import { useState } from "react"
import { useClickAnyWhere } from "usehooks-ts"



export function useActiveLink<T> (initialValue: T) {
    const [activeLink, setActiveLink] = useState<T>(initialValue)

    const handleActiveLink = (id: T) => {
        // change's the currently active link
        if (activeLink === id) {
            setActiveLink(initialValue)
            return
        }

        setActiveLink(id)
    }

    return {activeLink, handleActiveLink}
}

export function useCloseLinkOnClickOutside<T> (
    descOpened: boolean, 
    id: T, 
    handleDescChanged: (id: T) => void,
    element: HTMLDivElement | null
    ) {
    useClickAnyWhere((e) => {
        // close this current modal on click outside
        if (!descOpened) return
        if (element && !element.contains(e.target as Node)) {
            handleDescChanged(id)
        }
    })
}