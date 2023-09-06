// Create server with express
const express = require('express');
const app = express();

app.get('/', (req, res) => {
     res.send('<h1>Hi Murat</h1>')
});

app.get('/about', (req, res) => {
     res.json({
          name: 'Murat'
     })
})

app.listen(3000, () => console.log('Server is running at port 3000'));

