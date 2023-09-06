// Create server with express
const express = require('express');
const app = express();
const bicycles = require('./data/data.json')

app.set('view engine', 'ejs');
app.use(express.static('public'));

//parse application
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

app.get('/', (req, res) => {
     return res.render('bicycles')
});

app.get('/bicycle', (req, res) => {
     console.log(req.query.id);
     const bicycle = bicycles.find(b => b.id === req.query.id)

     return res.render('overview', {
          bicycle
     });
})

app.listen(3000, () => console.log('Server is running at port 3000'))