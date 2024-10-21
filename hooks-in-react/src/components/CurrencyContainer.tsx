import React from "react"
import { CurrencyDisplay } from "./CurrencyDisplay"

export const CurrencyContainer: React.FC = () => {
    return (
        <div>
            <h1>convert</h1>
            <CurrencyDisplay currency="euro" rate={1.2} />
            <CurrencyDisplay currency="grn" rate={40}/>

        </div>
    )
}