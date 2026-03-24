const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/contact', (req, res) => {
    const { fullName, email, phone, subject, message } = req.body;

    console.log("=== New Message ===");
    console.log(`Name: ${fullName}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);
    console.log(`Subject: ${subject}`);
    console.log(`Message: ${message}`);
    console.log("==================");

    res.send("הנתונים התקבלו בהצלחה!");
});

app.listen(PORT, () => {
    console.log(`Server: http://localhost:${PORT}`);
});