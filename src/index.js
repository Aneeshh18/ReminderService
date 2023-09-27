const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');

const { sendBasicEmail } = require("./services/email-service");

const setupAndStartServer = async () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(PORT, () => {
        console.log(`Server started at port ${PORT}`);

        sendBasicEmail(
            'support@admin.com',
            'aneesh9169@gmail.com',
            'This is a test email ',
            'Hey, how are you i hope you like the support service'
        );
    });
}

setupAndStartServer();
