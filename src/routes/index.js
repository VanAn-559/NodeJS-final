
const courseRouter = require('./courses');
const meRouter = require('./me');
const cartRouter = require('./cart');
const acRouter = require('./ac');
const accountRouter = require('./account');
const customerRouter = require('./customer');
const listRouter = require('./list');
const homeRouter = require('./home');
const adminRouter = require('./admin');
const loginRouter = require('./login');
const usersRouter = require('./users');

function route(app) {
    app.use('/ac', acRouter);
    app.use('/account', accountRouter);
    app.use('/cart', cartRouter);
    app.use('/users', usersRouter);
    app.use('/me', meRouter);
    app.use('/customer', customerRouter);
    app.use('/admin', adminRouter);
    app.use('/list', listRouter);
    app.use('/courses', courseRouter);
    app.use('/', loginRouter);

    // app.use('/', homeRouter);
    app.use('/', homeRouter);

}

module.exports = route;