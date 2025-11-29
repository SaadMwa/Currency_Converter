import React, { useState } from 'react'
import useCurrencyInfo from './Hooks/useCurrencyInfo'
import CurrencyInput from './Components/CurrencyInput'


function App() {
  const [Amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [To, setTo] = useState("pkr")
  const [ConvertedAmount, setConvertedAmount] = useState();
  const { rate, loading, error } = useCurrencyInfo(from);
  const Currencies = Object.keys(rate);

  const btnHandler = () => {
    const targetRate = rate[To.toLowerCase()];
    setConvertedAmount(Amount * targetRate);
  }

  const url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SXzruhk-wn3x4VnvykI-wVCL2efbgLF2wA&s'

  return (
    <div
      className="w-full h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${url})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full gap-8 text-white px-4">
        <h1 className="text-4xl font-bold mb-4">Currency Converter</h1>

        <div className="flex flex-col gap-4 w-full max-w-md bg-gray-900/80 p-6 rounded-xl shadow-lg">
       <div className="flex flex-col w-1/3">
  <label className="mb-2 text-gray-300">Amount</label>
  <input
    type="number"
    value={Amount}
    onChange={(e) => setAmount(Number(e.target.value))}
    placeholder="Enter Amount"
    className="p-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>

          <div className="flex gap-4 items-center">
            <CurrencyInput
              value={from}
              onChange={setFrom}
              options={Currencies}
            />
            <button
              onClick={() => { setFrom(To); setTo(from) }}
              className="bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded-full text-white text-xl cursor-pointer"
            >
              ⇄
            </button>
            <CurrencyInput
              value={To}
              onChange={setTo}
              options={Currencies}
            />
          </div>

          <button
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-200 cursor-pointer"
            onClick={btnHandler}
          >
            Convert
          </button>

          <p className="text-white text-xl font-semibold mt-4 bg-gray-900 px-4 py-2 rounded-lg shadow-md">
            Converted Amount: <span className="text-blue-400">{ConvertedAmount ? ConvertedAmount.toFixed(2) : 0}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
