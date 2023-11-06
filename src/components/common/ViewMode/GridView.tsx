import { ViewProps } from "./type"

const GridView = ({ children, className = "" }: ViewProps) => {
    return (
        <div className={`grid w-full justify-items-center md:justify-items-start grid-cols-dynamic-193 md:grid-cols-3 xl:grid-cols-4 gap-7 ${className}`}>
            {children}
        </div>
    )
}

export default GridView