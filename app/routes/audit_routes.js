const requestIp = require('request-ip');
// routes/audit_routes.js
module.exports = function (app, db) {
    //----------GET----------------------------//
    app.get('/v1/public/audits', (req, res) => {
        db.collection('audits')
            .find()
            .toArray((err, items) => {
                if (err) {
                    res.send({ 'error': 'An error has occurred' });
                } else {
                    res.send(items);
                }
            });
    });
    app.get('/v1/public/audits/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.collection('audits').findOne(details, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(item);
            }
        });
    });

    //----------POST---------------------------//
    app.post('/v1/public/audits', (req, res) => {
        const clientIp = requestIp.getClientIp(req);
        const audit = { text: req.body.body, title: req.body.title };
        audit.clientIp = clientIp;
        audit.timeAudit = new Date();

        db.collection('audits').insert(audit, (err, result) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(result.ops[0]);
            }
        });
    });
};