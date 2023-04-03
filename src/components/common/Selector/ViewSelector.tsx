import { VscCircleLargeFilled } from "react-icons/vsc"
import Selector, { SelectItem } from "."

const ViewSelector = ({ id, handleChangeId, selectedOption, options }: ViewSelectorProps) => {
    return (

        <Selector
            id={id}
            handleChangeId={handleChangeId}
            label='View'
            triggerChildren={
                <>
                    <span>{selectedOption?.leftIcon}</span>
                    <span>{selectedOption?.title}</span>
                </>
            } >
            {options.map((option) => {
                return (
                    <SelectItem key={option.id} value={option.id}>
                        <div className='flex items-center gap-2'>
                            <VscCircleLargeFilled
                                className='text-primary-300 group-rdx-highlighted:text-primary group-rdx-state-checked:text-accent' />
                            <span>{option.leftIcon}</span>
                            <span> {option.title}</span>
                        </div>
                    </SelectItem>
                )
            })}
        </Selector>
    )
}

export default ViewSelector
