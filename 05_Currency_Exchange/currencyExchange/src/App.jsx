// CurrencyConverter.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'
 
const App = () => {

  const [exchangeRates, setExchangeRates] = useState({});
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [convertedAmount, setConvertedAmount] = useState(null);
 
  useEffect(() => {
    // Fetch exchange rates from API 
    const apiUrl = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
     
    axios.get(apiUrl)
      .then(response => {

        setExchangeRates(response.data.rates);

      })
      .catch(error => {

        console.error('Error fetching exchange rates:', error);

      });
  }, [fromCurrency]);
 
  useEffect(() => {

    // Convert currency when 'amount', 'fromCurrency', or 'toCurrency' changes

    const conversionRate = exchangeRates[toCurrency];
    if (conversionRate) {

      const converted = amount * conversionRate;

      setConvertedAmount(converted.toFixed(2));

    }
  }, [amount, fromCurrency, toCurrency, exchangeRates]);
 
  const handleChange = (e) => {
    
    const { name, value } = e.target;

    switch (name) {
      
      case 'amount':
        setAmount(value);
      break;
      
      case 'fromCurrency':
        setFromCurrency(value);
       break;
      
      case 'toCurrency':
        setToCurrency(value);
      break;
      
      default:
        break;
    }
  };
 
  return (
    <div className='card' >
      <h1>Currency Converter</h1>
 
      <div className='currency_exchnage'>
 
      <div className="input_container" >
        <label className="input_label">Amount:</label>
        <input
          type="number"
          name="amount"
          className="input_field"
          value={amount}
          onChange={handleChange}
        />
      </div>
      <div className="input_container">
        <label className="input_label">From Currency:</label>
        <select
          name="fromCurrency"
          value={fromCurrency}
          onChange={handleChange}
          className="input_field"
        >
          {Object.keys(exchangeRates).map(currency => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <div className="input_container">
        <label className="input_label">To Currency:</label>
        <select
          name="toCurrency"
          value={toCurrency}
          onChange={handleChange}
          className="input_field"
        >
          {Object.keys(exchangeRates).map(currency => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
 
      </div>
 
      <div className='output'>
        <h2>Converted Amount: {convertedAmount}</h2>
      </div>
    </div>
  );
};
 
export default App;