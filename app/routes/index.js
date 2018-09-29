// routes/index.js
const auditRoutes = require('./audit_routes');
module.exports = function (app, db) {
    auditRoutes(app, db);
    // Other route groups could go here, in the future
};