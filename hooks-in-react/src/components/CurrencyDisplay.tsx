import { useContext } from "react"
import { CurrencyContext } from "./CurrencyCottext"

type CurrencyProps = {
    currency: string,
    rate: number,
}

export const CurrencyDisplay: React.FC<CurrencyProps> = ({ 
    currency, 
    rate 
}) => {
    const priceInDollars = useContext(CurrencyContext)
    const convertedPrice = priceInDollars * rate
    return(
        <div>
            <h4>price in {currency} : {convertedPrice.toFixed(2)}</h4>
        </div>
    )
}