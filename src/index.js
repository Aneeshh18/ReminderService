const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const { subscribeMessage, createChannel } = require('./utils/messageQueue');

// const { sendBasicEmail } = require("./services/email-service");

const TicketController = require('./controller/ticket-controller');

const jobs = require('./utils/job');

const setupAndStartServer = async () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));



    app.post('/api/v1/tickets', TicketController.create);

    app.listen(PORT, () => {
        console.log(`Server started at port ${PORT}`);
        jobs();
        // sendBasicEmail(
        //     'support@admin.com',
        //     'notificaitonservice@gmail.com',
        //     'This is a test email ',
        //     'Hey, how are you i hope you like the support service'
        // );
    });
}

setupAndStartServer();
