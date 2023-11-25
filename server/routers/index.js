const userRouter = require('./user.router')
const {notFound, errHandler} = require('../middlewares/errHandler')

const initRouters = (app) =>{
    app.use('/api/users', userRouter)





    app.use(notFound)
    app.use(errHandler)
}

module.exports = initRouters