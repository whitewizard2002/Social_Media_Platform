
const logger = (req,res,next) => {
    const date= new Date();
    console.log(`Request Stamp: ${req.url} ${req.method} ${date}`);
    next();
}

module.exports = logger;