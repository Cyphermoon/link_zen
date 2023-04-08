import Container from "@/components/common/Container"
import clsx from "clsx"

interface FormControlProps {
    label: string
    labelId: string
    children: React.ReactNode
}

interface InputProps {
    type?: string
    placeholder?: string
    id: string
    className?: string
}

const inputClass = clsx("bg-primary text-base text-primary-700 py-2 px-3 rounded-lg outline-none focus:ring-1 focus:ring-primary-500")


const FormControl = ({ label, labelId, children }: FormControlProps) => {

    return (
        <div className='space-y-3 flex flex-col'>
            <label className="text-lg font-bold text-primary-800 capitalize" htmlFor={labelId}>{label}</label>
            {children}
        </div>
    )
}


const Input = ({ type = "text", id, placeholder, className }: InputProps) => {
    return (
        <input type={type} placeholder={placeholder ? placeholder : ""} id={id} className={inputClass} />
    )
}

const Contact = () => {
    return (
        <div>
            <Container>
                <form>
                    <h2>Contact Us</h2>
                    <div>

                        <FormControl label="Name" labelId='name'>
                            <Input id="name" />
                        </FormControl>
                        <FormControl label="Email" labelId='email'>
                            <Input id="email" />
                        </FormControl>
                        <FormControl label="Message" labelId='message'>
                            <textarea name="" id="message" className={inputClass}>

                            </textarea>
                        </FormControl>
                    </div>
                </form>
            </Container>

        </div>
    )
}

export default Contact