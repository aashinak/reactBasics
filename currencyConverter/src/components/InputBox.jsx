import { useId } from "react"

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = 'usd',
  amountDisabled = false,

}) {
  const id = useId()
  return (
    <div className="flex bg-white px-5 py-3 rounded-lg justify-between ">
        <div className="flex flex-col w-1/2 p-2 gap-2">
            <label  className="text-gray-500 " htmlFor={id} >{label}</label>
            <input disabled={amountDisabled} 
            id={id}
            className="outline-none" 
            type="number"  
            placeholder="Amount"
            value={amount}
            onChange={(e) => {
              onAmountChange && onAmountChange(Number(e.target.value))
            }} />
        </div>
        <div className="flex flex-col p-2 gap-2">
            <label className="text-gray-500" htmlFor="">Currency Type</label>
            <select 
            className="outline-none cursor-pointer" 
            name="" id=""
            value={selectedCurrency}
            onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}>
                {currencyOptions.map((currency)=>(
                  <option value={currency} key={currency}>{currency}</option>
                )
                  
                )}
            </select>
        </div>
    </div>
  )
}

export default InputBox