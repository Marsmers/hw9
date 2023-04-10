// var age = + prompt ("Скільки вам років?", "");
// if (age < 1) alert("чи кіборг, чи KERNESS");
// if (age < 18 && age > 0) alert("школяр");
// else if (age > 18 && age < 30)alert("молодь");
// else if (age > 30 && age < 45)alert("зрілість");
// else if (age > 45 && age < 60)alert("захід сонця");
// else if (age > 60) alert("як пенсія?");








// let size = prompt("Вкажіть ваш розмір одягу").toUpperCase();
// let italianSize = "";
// switch (size){
//    case "XS" : 
//     (italianSize = "40");
//     break;
//    case "S" :
//     (italianSize = "42");
//     break;
//     case"M" : 
//     (italianSize = "44");
//     break;
//     case"L" : 
//     (italianSize = "46");
//     break;
//     case "XL" : 
//     (italianSize = "48");
//     break;
//     case"XXL" : 
//     (italianSize = "50");
//     break;
//     default: italianSize = "Розмір не знайдено";
// }
// let isSizeFound = (italianSize !== "Розмір не знайдено");
// alert(`Розмір одягу ${size} в італійській розмірній сітці - ${isSizeFound ? italianSize : "Розмір не знайдено"}`);



// let color = prompt("Введіть колір", "");

// if (color === "red") {
// document.write("<div style='background-color: red;'>червоний</div>");
// } else if (color === "black") {
// document.write("<div style='background-color: black; color: white;'>чорний</div>");
// } else if (color === "blue") {
// document.write("<div style='background-color: blue;'>синій</div>");
// } else if (color === "green") {
// document.write("<div style='background-color: green;'>зелений</div>");
// } else {
// document.write("<div style='background-color: gray;'>Я не зрозумів</div>");
// }


// const noSwitch = (key, cases, defaultKey='default') => {
//     if (key in cases) {
//         return cases[key].call(cases[key]);
//       } else {
//         return cases[defaultKey].call(cases[defaultKey]);
//       }
// }

// const drink = prompt("Що ви любите пити")
// noSwitch(drink, {
//     воду: () => console.log('Найздоровіший вибір!'),
//     чай(){
//         console.log('Смачна та корисна штука. Не перестарайтеся з цукром')
//     },
//     "пиво": () => console.log('Добре влітку, та в міру'),
//     віскі: function(){
//         console.log('Та ви, батечку, естет! Не забудьте лід і сигару')
//     },
//     default(){
//         console.log('шото я не зрозумів')
//     }
// })


// fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
//    .then(data => {
//       const buttonContainer = document.createElement('div');
//       for (const currency in data.rates) {
//          const button = document.createElement('button');
//          button.innerHTML = currency;
//          const handleClick = (rate) => {
//             const amount = prompt(`Enter the amount in ${currency}:`);
//             const convertedAmount = amount * rate;
//             alert(`The amount in USD is ${convertedAmount.toFixed(2)}`);
//          };
//          button.onclick = ((rate) => () => handleClick(rate))(data.rates[currency]);
//          buttonContainer.appendChild(button);
//       }
//       document.body.appendChild(buttonContainer);
//    });


// fetch('https://open.er-api.com/v6/latest/USD')
//    .then(res => res.json())
//    .then(data => {
//       const rates = data.rates;
//       const from = document.getElementById('from');
//       const to = document.getElementById('to');
//       const rate = document.getElementById('rate');
//       const amount = document.getElementById('amount');
//       const result = document.getElementById('result');
//       for (const currency in rates) {
//          const option1 = document.createElement('option');
//          const option2 = document.createElement('option');
//          option1.innerText = currency;
//          option2.innerText = currency;
//          from.append(option1);
//          to.append(option2);
//       }
//       const calculate = () => {
//          const fromCurrency = from.value;
//          const toCurrency = to.value;
//          const exchangeRate = rates[toCurrency] / rates[fromCurrency];
//          rate.innerText = `Exchange rate: 1 ${fromCurrency} = ${exchangeRate} ${toCurrency}`;
//          result.innerText = `Result: ${(amount.value * exchangeRate).toFixed(2)} ${toCurrency}`;
//       };
//       from.onchange = calculate;
//       to.onchange = calculate;
//       amount.oninput = calculate;
//       calculate();
//    });


const countriesSelect = document.querySelector('#countries');
const citiesSelect = document.querySelector('#cities');
fetch('https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.min.json')
   .then(res => res.json())
   .then(data => {
      // заповнюємо select#countries елементами option з назвами країн
      data.forEach(country => {
         const option = document.createElement('option');
         option.value = country.name;
         option.textContent = country.name;
         countriesSelect.appendChild(option);
      });
   
      countriesSelect.addEventListener('change', () => {
         const selectedCountry = countriesSelect.value;
         // видаляємо старі елементи select#cities
         citiesSelect.innerHTML = '';
         // додаємо option елементи з містами обраної країни
         data.forEach(country => {
            if (country.name === selectedCountry) {
               country.cities.forEach(city => {
                  const option = document.createElement('option');
                  option.value = city;
                  option.textContent = city;
                  citiesSelect.appendChild(option);
               });
            }
         });
      });
   });





