let currencyOne = $('#currency1');
let amountCurrencyOne = $('#amount1');
let currencyTwo = $('#currency2');
let amountCurrencyTwo = $('#amount2');

let calc = $('#calcBtn');
let swap = $('#swapBtn');

//calculate 
function calculate () {
  
  const currencyOneVal = currencyOne.val();
  const amountCurrencyOneVal = amountCurrencyOne.val();
  const currencyTwoVal = currencyTwo.val();
  const amountCurrencyTwoVal = amountCurrencyTwo.val();

  $.ajax({
    type: 'GET',
    url: `https://v6.exchangerate-api.com/v6/41746c7bd74046c72828f9ee/latest/${currencyOneVal}`,
    success: function(data) {
      const rate = data.conversion_rates[currencyTwoVal];

      const result = (rate * amountCurrencyOneVal).toFixed(3);

      amountCurrencyTwo.val(result);
    }
  })
}

//events
calc.click( ()=> {
  calculate();
});

swap.click( ()=> {
  const temp = currencyOne.val();
  currencyOne.val(currencyTwo.val());
  currencyTwo.val(temp);

  calculate();
});


calculate();