const express = require('express'); // Подключаем к переменной express модуль express
const app = express(); // app стала переменной для создания запросов

// Запрос get
// app.get('/', (req, res) => {
//   res.send('Hello people!');
// });

// app.get('/paramRequest', (req, res) => {
//   res.send(req.query);
// });

// app.post('/fullName', (req, res) => {
//   const result = {};
//   let resultStr = '';
//   const str = req.query.fullName;

//   for (let i = 0; i < str.length; i++) {
//     if (i === 0 || str[i - 1] === ' ') {
//       resultStr += str[i];
//     }
//   }

//   result['result'] = resultStr;

//   res.send(result);
// });

app.post('/newArray', (req, res) => {
  const result = {};
  let resultArr = [];

  for (let i = 0; i < req.query.count; i++) {
    resultArr[i] = Math.random();
  }

  result['result'] = resultArr;

  res.send(result);
});

// Слушатель
app.listen(7000, () => {
  console.log('Example app on port 7000!@')
});