var authRoute = require('./AuthRoutes');
var userRoute = require('./UserRoutes');


module.exports = function (app) {
    app.use('/auth', authRoute);
    app.use('/user', userRoute);
}
