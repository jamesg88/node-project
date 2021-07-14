const express = require('express');
const 
const app = express();
const port = 3000;
const{Restaraunts} = require('/myRestaraunt')

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})

//flip a coin
app.get('/flipcoin', function (req, res) {
    const coin = (Math.floor(Math.random() * 2)==0);
    if(coin) res.send('Heads');
    else res.send('Tails');
})

app.get('/myRestaraunt', async (req, res) => {
    const allRestaraunts = await Restaraunt.findAll();
    res.json(allRes)
})