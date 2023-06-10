import clsx from 'clsx'
import React from 'react'
import Container from '../common/Container'
import Logo from '../common/Logo'

interface Props {
    withUnderline?: boolean
}

const Footer = ({ withUnderline }: Props) => {

    const LOGO_CLASS = clsx("text-accent font-black text-xl text-center", {
        "underline": withUnderline
    })

    return (
        <footer>
            <Container className="w-full flex justify-center py-5">
                <Logo className={LOGO_CLASS} />
            </Container>
        </footer>
    )
}

export default Footer