const express = require('express'); // Подключаем к переменной express модуль express
const mongoose = require('mongoose');
const cors = require('cors');

const app = express(); // app стала переменной для создания запросов
const Schema = mongoose.Schema;
app.use(express.json());
app.use(cors());

// Создаем схему, как будут храниться данные
const taskSchema = new Schema({
  text: String,
  isCheck: Boolean
});

// Подключение БД к проекту
const url = "mongodb+srv://Rustam:1234qwer@clustertodolist.yc1fu.mongodb.net/To_Do_List?retryWrites=true&w=majority";
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

// Модель для работы с таблицей в самой БД
// В mongoose создаем модель по таблице "tasks" по схеме taskSchema
const Task = mongoose.model("tasks", taskSchema);

// Запросы
// Добавление новой задачи
app.post('/createNewTask', (req, res) => {
  const task = new Task(req.body);
  
  task.save().then(result => {
    res.send(result);
  });
});

// Вывод всех данных
app.get('/getData', (req, res) => {
  Task.find().then(result => {
    res.send({data: result});
  });
});

// Удаление одной записи
app.delete('/deleteOne', (req, res) => {
  Task.deleteOne({ _id: req.query._id }).then(() => {
    Task.find().then(result => {
      res.send({data: result});
    });
  });
});

// Редактирование одной записи
app.patch('/updateOne', (req, res) => {
  Task.updateOne({ _id: req.body._id }, req.body).then(() => {
    Task.find().then(result => {
      res.send({data: result});
    });
  });
})

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