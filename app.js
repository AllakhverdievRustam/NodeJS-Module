const express = require('express'); // Подключаем к переменной express модуль express
const app = express(); // app стала переменной для создания запросов

// Запрос get
app.get('/', (req, res) => {
  res.send('Hello people!');
});

app.get('/paramRequest', (req, res) => {
  res.send(req.query);
})

// Слушатель
app.listen(7000, () => {
  console.log('Example app on port 7000!@')
});