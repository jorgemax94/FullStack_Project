var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://planck:planck123@cluster0.ysdop.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true
});
mongoose.Promisse = global.Promisse;

module.exports = mongoose;