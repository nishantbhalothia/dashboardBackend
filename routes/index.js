const express = require('express');
const router = express.Router();
const eventsController = require('../controllers/events.js');

// All routes
router.get('/', (req, res) => {
    res.send('Hello World');
}
);

router.use('/api/users', require('./api/user.js'));
router.get('/api/events', eventsController.getEvents);
router.get('/api/unique', eventsController.getUnique);
router.get('/api/alerts', eventsController.getAlerts);


module.exports = router;