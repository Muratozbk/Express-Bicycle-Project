// Create server with express
const express = require('express');
const app = express();

//parse application
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
     res.send('<h1>Hi Murat</h1>')
});

app.get('/about', (req, res) => {
     res.json({
          name: 'Murat'
     })
});

app.post('/login', (req, res) => {
     console.log(req.body.email);
     console.log(req.body.password);

     res.send('User login Successfully')
})

app.listen(3000, () => console.log('Server is running at port 3000'));

