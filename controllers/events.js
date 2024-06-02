const Events = require('../modles/eventsSchema');

// Get all events

exports.getEvents = async (req, res) => {
    try {
        const event = await Events.find();
        res.status(200).json(event);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports.getAlerts = async (req, res) => {
    try {
        const categories = await Events.find({}, "event_type timestamp");
        res.status(200).json(categories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports.getUnique = async (req, res) => {
    try {
        const categories = await Events.distinct('dest_port');
        res.status(200).json(categories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};