import { gsap } from "gsap"
import { MouseEvent } from "react"

export const useTiltEffect = () => {
    const tiltCard = (e: MouseEvent<HTMLDivElement>) => {

        const multiplier = 30

        // get the layout dimension
        let cardWidth = e.currentTarget.offsetWidth
        let cardHeight = e.currentTarget.offsetHeight

        // get the cursor position relative to element
        const X = e.nativeEvent.offsetX
        const Y = e.nativeEvent.offsetY

        // calculate the cursor's position relative to the center of the element
        let mouseX = X - (cardWidth / 2)
        let mouseY = Y - (cardHeight / 2)

        // normalize the value within a range of 1 to -1. the multiply the resulting value by multiplier
        let yRotate = ((mouseX / (cardWidth / 2))) * multiplier
        let xRotate = ((mouseY / (cardHeight / 2))) * -multiplier;

        // rotate the element
        gsap.to(e.currentTarget, {
            rotateX: xRotate,
            rotateY: yRotate,
        })
    }


    const removeTiltEffect = (e: MouseEvent) => {

        gsap.to(e.currentTarget, {
            rotateX: 0,
            rotateY: 0,
        })
    }

    return { tiltCard, removeTiltEffect }
}