const express = require('express')
const hbs = require('hbs');
const app = express()

require('./hbs/helpers');

const port = process.env.PORT || 3000

app.use( express.static( __dirname + '/public'))

hbs.registerPartials( __dirname + '/views/parciales', function (err) {});
app.set('view engine', 'hbs')


app.get('/', function (req, res) {
  //res.send('Hello World')
  res.render('home')

});

app.get('/about', function (req, res) {
    //res.send('Hello World')
    res.render('about')
  
  });
 
app.listen(port, () => {
    console.log(`Escuchando el puerto ${port}`)
});