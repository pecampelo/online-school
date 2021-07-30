//HTTP Request
const express = require('express');
const app = express();

const port = 7001;

app.use(express.json());
app.listen(port, () => { console.log(`Server is running on http://localhost:${port}/`);});

app.get('/api/users', (req, res) => {
    res.status(200).send({
        user: 'pedro',
        email: 'pedrohcmatheus@gmail.com',
        password: 'lilac'
    })
})

app.post('/api/users/:user', (req, res) => {

    const { user } = req.params;
    const { email } = req.body;

    if (!email) {
        res.status(418).send({ message: 'We need your e-mail'})
    }

    res.send({
        user: `${user}'s email is ${email}`,
    })
}); 
