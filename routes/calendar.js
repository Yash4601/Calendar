const express = require('express');

const calendarController = require('../controllers/calendarController');

const router = express.Router();

router.get('/', calendarController.getIndex);

router.post('/create-event', calendarController.createEvent);

module.exports = router;