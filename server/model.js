const mongoose = require('mongoose');
// link mongo and use immoc 集合
const DB_URL = 'mongodb://localhost:27017/imooc-chat'; // 127.0.0.1
// mongoose.connect(DB_URL);
mongoose.connect(DB_URL, { useNewUrlParser: true });

const models = {
  user: {
    user: { type: String, require: true },
    pwd: { type: String, require: true },
    type: { type: String, require: true },
    // 头像
    avatar: { type: String },
    // 个人简介或者职位简介
    desc: { type: String },
    // 职位名
    title: { type: String },
    // 如果是boss 还有两个字段
    component: { type: String },
    money: { type: String }
  },
  chat: {
    chatid: { type: String, require: true },
    from: { type: String, require: true },
    to: { type: String, require: true },
    read: { type: Boolean, default: false },
    content: { type: String, require: true, default: '' },
    create_time: { type: Number, default: Date.now }
  }
};

for (let m in models) {
  mongoose.model(m, new mongoose.Schema(models[m]));
}

module.exports = {
  getModel: function(name) {
    return mongoose.model(name);
  }
};

// mongoose.connection.on('connected', function() {
//   console.log('mongo connect success');
// });

// // 类似于mysql的表 mongo里有文档、字段的概念
// const User = mongoose.model(
//   'user',
//   new mongoose.Schema({
//     user: {
//       type: String,
//       require: true
//     },
//     age: {
//       type: Number,
//       require: true
//     }
//   })
// );
