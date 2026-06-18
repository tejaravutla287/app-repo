const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('<h1>Hello from Azure & ArgoCD POC!</h1>');
});

app.get('/greet', (req, res) => {
    res.send('<h1>Hello DevOps Team !</h1>');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
