const routes = require ('next-routes')();

routes.add('/data/submit', '/data/submit')
.add('/data/market', '/data/market')
.add('/data/:address', '/data/show');

module.exports = routes;