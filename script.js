const currencyID_one = document.getElementById('currency-one');
const amount_one = document.getElementById('amount-one');
const currencyID_two = document.getElementById('currency-two');
const amount_two = document.getElementById('amount-two');
const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

//Fecth exchange rates and update the DOM

function calculate() {
  const currency_one = currencyID_one.value
  const currency_two = currencyID_two.value


  fetch(`https://open.exchangerate-api.com/v6/latest`)
  .then(res => res.json())
  .then(data => {
    const rate = data.rates[currency_two] / data.rates[currency_one]  

    rateEl.innerHTML = `1 ${currency_one} = ${rate} ${currency_two}`

    amount_two.value = (rate * amount_one.value).toFixed(2)
  })  
}




//Event Listeners
currencyID_one.addEventListener('change', calculate)
currencyID_two.addEventListener('change', calculate)
amount_one.addEventListener('input', calculate)
amount_two.addEventListener('input', calculate)

swap.addEventListener('click', () => {
  const temp = currencyID_one.value
  currencyID_one.value = currencyID_two.value
  currencyID_two.value = temp

  calculate();
})


calculate();



