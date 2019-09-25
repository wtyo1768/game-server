// - Difinition of logger
// - for Developent ,logger log info to console 
// - for Production use , logger log info or error to file

const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf } = format;

const ChooseFormat = printf(({ level, message, label, timestamp }) =>
    (process.env.NODE_ENV == 'production') ?
        `${timestamp} ${level} | ${message}` : `${level} | ${message}`);

const errorStackFormat = format(info => {
    if (info instanceof Error) {
        return Object.assign({}, info, {
            stack: info.stack,
            message: info.message
        })
    }
    return info
})
const logger = createLogger({
    format: combine(
        // format.colorize(),
        format.splat(),
        timestamp({ format: 'YYYY-MM-DD [|] HH:mm' }),
        errorStackFormat(),
        format.simple()
    ),
    transports: (process.env.NODE_ENV != 'production') ? [new transports.Console(),]
        : [new transports.File({ filename: 'log/error.log', level: 'error' }),
        new transports.File({ filename: 'log/combined.log', level: 'info' })]

});

global.logger = logger;

const LogreqInfo = async (req, res, next) => {
    const starthandletime = Date.now();
    await next();
    const responsetime = Date.now() - starthandletime;
    // logger.info(`${req.method} ${req.url} time : ${responsetime}`);

}


exports.LogreqInfo = LogreqInfo;