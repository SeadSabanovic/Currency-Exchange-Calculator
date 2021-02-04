
# Currency-Exchange-Calculator
### Simple jQuery Currency Exchange Calculator, made with the ExchangeRate-API

*Link to the project*: [Currency Exchange Calculator](https://sabanovics.com/ExchangeRate/)
*Link to the **ExchangeRate-API* Documentation**: [ExchangeRate-API](https://www.exchangerate-api.com/docs/overview)

 I made this small project primarily to refresh my memory on **AJAX**, and Fetching data from **API**s. This project wasn't **CSS** heavy so I won't go into details with the aesthetics. As you can see the layout is very simple, however, I am proud of the color combination. :blush:
 ___
![Project Image](https://raw.githubusercontent.com/SeadSabanovic/Currency-Exchange-Calculator/main/img/snip1.PNG)
___
The whole project has only one function in the code ( to calculate the rate of the selected currency ), and a couple of event listeners.
```javascript
function  calculate () {
...
	success:  function(data) {
		const  rate = data.conversion_rates[currencyTwoVal];
		const  result = (rate * amountCurrencyOneVal).toFixed(3);
		amountCurrencyTwo.val(result);
	}
...
}
```
___
### #Issues
The only issue I ran up on, wasn't code, but rather **API**-related. The **ExchangeRate-API** does have a pretty solid documentation, however There wasn't an **HTML** table, nor a select with all the options/values (needed for the currencies) anywhere to be found. Thanks to some of VS Code's shortcuts, I managed to write them down in about 10 minutes, so if anyone needs them, I'll leave a link below.

[ExchangeRate-API options for V6](https://github.com/SeadSabanovic/Currency-Exchange-Calculator/blob/main/Select%20%3E%20Options%20For%20ExchangeRate-API)
