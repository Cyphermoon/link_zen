import { VscCircleLargeFilled } from "react-icons/vsc"
import Selector, { SelectItem } from "."

const SortSelector = ({ id, handleChangeId, selectedOption, options }: SortSelectorProp) => {
    return (
        <Selector
            id={id}
            handleChangeId={handleChangeId}
            label='Sort By'
            triggerChildren={
                <>
                    <span>{selectedOption?.leftIcon}</span>
                    <span>{selectedOption?.title}</span>
                    <span>{selectedOption?.rightIcon}</span>
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
                            <span>{option.rightIcon}</span>

                        </div>
                    </SelectItem>
                )
            })}
        </Selector>
    )
}

export default SortSelector