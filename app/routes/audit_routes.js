const requestIp = require('request-ip');
// routes/audit_routes.js
module.exports = function (app, db) {
    app.get('/audit', (req, res) => {
        // You'll create your note here.
        const clientIp = requestIp.getClientIp(req);
        console.log(clientIp);
        res.send('Getting audits')
    });
};