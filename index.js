/**
 * Created by ysbpysbp on 2016/9/11.
 */
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');

app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'views/layouts')
}))
app.set('view engin', '.hbs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (request, response) => {
    response.render('home', {
    name: 'John'
})
});

app.listen(3000)