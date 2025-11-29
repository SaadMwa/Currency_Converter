import React, { useEffect, useState } from 'react'

function useCurrencyInfo(from){
     const [rate, setRate] = useState(0); 
     const [loading, setLoading] = useState(true); 
     const [error, setError] = useState(false); 

     useEffect(() => {
         if(!from){
           return;
         }

         setLoading(true);
         fetch(`https://2024-03-06.currency-api.pages.dev/v1/currencies/${from}.json`)
         .then((res) => res.json())
         .then(data => {
            const CurrencyData = data[from];
            setRate(CurrencyData);
            setLoading(false);
         })
         .catch(error => {
           setError(true);
           setLoading(false);
         });
     },[from]);

     return { rate, loading, error };
}

export default useCurrencyInfo
