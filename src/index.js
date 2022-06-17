// usada a api (https://api.agify.io/?name=pedro) que estava no site com 15 api's

const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/IdadeAPI/views');

app.use(express.static('public'));

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());
const IdadeRouter = require('./IdadeAPI/routes/idade-routes');

app.use('/', IdadeRouter);

app.listen(3000, () => console.log("Escutando na porta 3000"));