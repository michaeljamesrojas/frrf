const express = require('express');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 5000;
const imagePath = '/imagee.jpg';

app.use(cors());
app.use(express.static(__dirname + '/images'));
app.use(express.static(__dirname + '/user'));
// console.log that your server is running
app. listen(port, () => console. log(`App listening on port ${port}`));
console.log('visit: http://localhost:5000/whoisthere');

// create a GET request route
app.get('/whoisthere', (req, res) => {
    res.send({
        express_message: 'HELLO I AM LOLA FROM EXPRESS BACKEND',
        express_image: imagePath,
    });
})
app.get('/getChoices/:questionName', (req, res) => {
    
    res.send({
        express_message: 'HELLO I AM LOLA FROM EXPRESS BACKEND',
        express_image: imagePath,
    });
})