import { ViewProps } from "./type"

const ListView = ({ children, className = "" }: ViewProps) => {
    return (
        <div className={`flex flex-col w-full justify-start items-start space-y-4 ${className}`}>
            {children}
        </div>
    )
}

export default ListView