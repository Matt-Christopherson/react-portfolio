const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.post('/send-email', (req, res) => {
    const { from, to, subject, text, category } = req.body;
    const url = 'https://send.api.mailtrap.io/api/send';
    const token = 'e726ebd7cc0df910d1e3e4f3ea18e8b2';

    axios.post(url, { from, to, subject, text, category }, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        res.json(response.data);
    })
    .catch(error => {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Internal Server Error', details: error.toString() });
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
