const Event = require('../models/event')
const moment = require('moment');

exports.getIndex = async (req, res, next) => {
    const events = await Event.find({
        date: { $gte: moment(req.query.start).toDate() },
    })
    // res.send(events);
    res.render('index', {
        pageTitle: 'Calendar',
    })
};

exports.createEvent = async (req, res, next) => {
    try {
        const event = await Event(req.body);
        await event.save();
        res.sendStatus(201);
    } catch (error) {
        console.log(error);
    }
    
    // res.json(event);
    
}