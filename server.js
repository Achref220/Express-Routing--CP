const express = require('express');
const path = require('path')
const app = express()
const port = 3500;


const invalidDate = (req, res, next) => {
    let date = new Date();
    let days = date.getDay();
    let hours = date.getHours();

    (days == 0 || days == 6 || hours < 9 || hours > 17) ? 
    res.send("we are closed The web application is only available during working hours (Monday to Friday,  from 9 to 17).")
    :  next()
};

app.use(invalidDate);
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, 'public', 'css')));



app.get('/' , (req, res) => {
    res.sendFile(__dirname + '/public/HomePage.html')
});
app.get('/contact' , (req, res) => {
    res.sendFile(__dirname + '/public/ContactUs.html')
})
app.get('/services' , (req, res) => {
    res.sendFile(__dirname + '/public/OurServices.html')
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))