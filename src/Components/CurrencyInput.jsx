import React from 'react'

function CurrencyInput({ value, onChange, options }) {
  return (
    <div className="flex flex-col flex-1">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="p-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
      >
        {options.map((currency) => (
          <option key={currency} value={currency}>
            {currency.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  )
}

export default CurrencyInput
