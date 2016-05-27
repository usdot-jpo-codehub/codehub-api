// Commented out so the root route is not served via this file.  This allows
// the static content from the /client folder to be used.
//
// module.exports = function(server) {
//   // Install a `/` route that returns server status
//   var router = server.loopback.Router();
//   router.get('/', server.loopback.status());
//   server.use(router);
// };
