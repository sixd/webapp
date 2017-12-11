var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://116.62.69.26:27017/webappdb', {
  useMongoClient: true
});
