// Импортим модель БД
const Task = require('../../db/models/task/Index');

module.exports.createNewTask = (req, res) => {
  const task = new Task(req.body);
  
  task.save().then(() => {
    Task.find().then(result => {
      res.send({data: result});
    });
  });
};

module.exports.getAllTasks = (req, res) => {
  Task.find().then(result => {
    res.send({data: result});
  });
};

module.exports.deleteOneTask = (req, res) => {
  Task.deleteOne({ _id: req.query._id }).then(() => {
    Task.find().then(result => {
      res.send({data: result});
    });
  });
};

module.exports.deleteAllTask = (req, res) => {
  Task.remove({}).then(() => {
    Task.find().then(result => {
      res.send({data: result});
    });
  });
};

module.exports.updateOneTask = (req, res) => {
  Task.updateOne({ _id: req.body._id }, req.body).then(() => {
    Task.find().then(result => {
      res.send({data: result});
    });
  });
};