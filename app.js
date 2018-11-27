const express = require('express')
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 3000;
require('./hbs/helpers');

hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');
 
app.get('/', function (req, res) {
    res.render('home', {
        name: 'javi',
        year: new Date().getFullYear()
    });
});

app.get('/about', function (req, res) {
    res.render('about', {
        name: 'Javi',
        year: new Date().getFullYear()
    });
});

app.get('/home', function (req, res) {
    res.render('home', {
        name: 'Javi',
        year: new Date().getFullYear()
    });
});

 
app.listen(port, () => console.log(`escuchando peiciones en el puerto ${port}`));