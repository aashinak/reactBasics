import { useState } from "react"
import { InputBox } from "./components"
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)
  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)

    setAmount(convertedAmount)
    
  }
  const convert = () =>{
    setConvertedAmount(amount * currencyInfo[to])
  }
  return (
    <div className="w-full h-screen flex flex-wrap justify-center 
    items-center bg-cover bg-no-repeat" 
    style={{backgroundImage:`url(https://images.pexels.com/photos/1006060/pexels-photo-1006060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`}}>
      <div className="w-full max-w-lg bg-white/30 p-10 rounded-xl border border-gray-60 backdrop-blur-sm  shadow-2xl ">
        <form className="flex flex-col gap-3  " onSubmit={(e)=>{
          e.preventDefault()
          convert()
        }}>
          <InputBox 
          label="from"
          amount={amount}
          currencyOptions={options}
          onCurrencyChange={(currency)=>setFrom(currency)}
          onAmountChange={(amount)=>setAmount(amount)}
          selectedCurrency={from}
          
          />
          <button onClick={swap}  className="bg-blue-600 px-2 py-1 rounded-lg w-1/4 m-auto text-white">Swap</button>
          <InputBox 
          label="to"
          amount={convertedAmount}
          currencyOptions={options}
          onCurrencyChange={(currency)=>setTo(currency)}
          selectedCurrency={to}
          amountDisabled
          
          />

          <button type="submit" className="bg-blue-900 text-white p-4 rounded-lg w-full">Convert {from.toUpperCase()} to {to.toUpperCase()}</button>

        </form>
      </div>
    </div> 
  )
}

export default App