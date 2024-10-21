import { useState } from 'react'
import './App.css'
import { CurrencyContext } from './components/CurrencyCottext'
import { CurrencyContainer } from './components/CurrencyContainer'
import { CurrencyDisplay } from './components/CurrencyDisplay'

function App() {
  const [price, setPrice] = useState(0)
  return (
    <div>
      <CurrencyContext.Provider value={price}> 
      <h2>конвертор валюти</h2>
      <h3>ціна в доларах</h3>
      <input 
        type="number" 
        value={price} 
        onChange={(event) => setPrice(parseFloat(event?.target.value))} />
      <CurrencyContainer />
      <div>
        <CurrencyDisplay currency='crn' rate={1.5}/>
      </div>

      </CurrencyContext.Provider>
    </div>
  )
}
export default App
  