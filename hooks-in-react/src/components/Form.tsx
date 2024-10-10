import { ChangeEvent, useState } from "react"


export const Form: React.FC = () => {
    const [inputValue, setInputValue] = useState('')

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }
    return (
        <div>
            <form action="">
                <input 
                type="text" 
                value={inputValue}
                onChange={handleChange}
                />

                <p>{inputValue}</p>
            </form>
        </div>
    )
}