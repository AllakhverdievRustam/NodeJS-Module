const express = require('express'); // Подключаем к переменной express модуль express
const mongoose = require('mongoose');
const cors = require('cors');

const app = express(); // app стала переменной для создания запросов

// Парсинг данных (для чтения JSON) и работа с корсами
app.use(express.json());
app.use(cors());

// Импорт роутов, с котормыми мы будем работать
const apiRoutes = require("./src/modules/routes/routes");

// Подключение БД к проекту
const url = "mongodb+srv://Rustam:1234qwer@clustertodolist.yc1fu.mongodb.net/To_Do_List?retryWrites=true&w=majority";
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

// Запуск роутов
app.use("/", apiRoutes);

// Слушатель 
// (запкск приложения на прослушивание определенного порта)
app.listen(7000, () => {
  console.log('Example app on port 7000!@')
});