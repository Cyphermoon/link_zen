import * as Select from "@radix-ui/react-select"
import { forwardRef } from "react"


const Selector = ({ id, handleChangeId, triggerChildren, label, children }: SelectorProp) => {
    return (
        <Select.Root value={id} onValueChange={handleChangeId}>
            <Select.Trigger className='outline-none bg-accent-50 rounded-lg'>
                <Select.Value>
                    <div className='flex flex-row items-center text-base gap-1 px-2 py-1 text-accent-900'>
                        {triggerChildren}
                    </div>
                </Select.Value>
            </Select.Trigger>
            <Select.Portal>
                <Select.Content className='bg-primary-50 py-2 px-1 rounded-md animate-in fade-in-0 duration-300'>
                    <Select.SelectViewport>
                        <Select.Group>
                            <Select.Label className='text-primary-800 font-medium text-lg mb-3 px-2'>
                                {label}
                            </Select.Label>
                            {children}
                        </Select.Group>
                    </Select.SelectViewport>
                </Select.Content>
            </Select.Portal>
        </Select.Root>
    )
}

export default Selector


export const SelectItem = forwardRef(({ value, children, ...props }: SelectItemProp, ref: any) => {
    return (
        <Select.Item
            value={value}
            ref={ref}
            {...props}
            className='flex flex-row items-center text-base gap-1 px-2 py-1 text-primary-600 rdx-highlighted:outline-none rdx-state-checked:text-accent-900 rdx-highlighted:text-primary rdx-highlighted:bg-accent-200  group  mb-2.5'  >
            <Select.ItemText className='' >
                {children}
            </Select.ItemText>
        </Select.Item>
    )

})


SelectItem.displayName = "SelectItem"

