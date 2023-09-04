import React from 'react'
import ViewMode from '../common/ViewMode'
import { ViewTypes } from '../common/ViewMode/type'
import { ImageState, ZenLinkProps } from './type'
import ZenLink from './ZenLink'

interface Props {
    zenLinks: ZenLinkProps[]
    setImage: (imageState: ImageState) => void
    activeLink: string
    handleDescChanged: (id: string) => void
    view?: ViewTypes
}

const ZenLinkList = ({ zenLinks, setImage, activeLink, handleDescChanged, view = "list" }: Props) => {

    return (
        <ViewMode view={view}>
            {
                zenLinks.map((data, idx) => (
                    <ZenLink
                        key={data.id}
                        idx={idx}
                        descOpened={data.id === activeLink}
                        setImage={setImage}
                        handleDescChanged={handleDescChanged}
                        view={view}
                        {...data}
                    />
                ))
            }
        </ViewMode>

    )
}

export default ZenLinkList

