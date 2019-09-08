const router = require('express').Router();
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const origin = ['https://kyronus.herokuapp.com/',
    'http://localhost:8080',
    'http://localhost:3000'
];
const corsOptions = {
    origin: origin,
    credentials: true,
    maxAge: 1728000,
};

router.use(cors(corsOptions));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.text());
router.use(cookieParser());
router.use(require('../Middleware/logger').LogreqInfo);

router.use(async (req, res, next) => { 
    res.header("Access-Control-Allow-Origin", req.headers.origin || origin)
    if (req.method == "GET" || req.body == {} || req.headers["content-type"] != 'text/plain' )
        return next();
    try {
        req.body = JSON.parse(req.body)
    } catch (error) {
        // logger.info('Global.Route: ' , error);
        console.log(req.body)
    }
    return next(); 
})

router.options("/", cors(corsOptions));

router.get('', (req, res) => res.send('This is Kyronus Server!!'));

router.get('/.well-known/assetlinks.json',(req,res)=> {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(require('../config/assetlinks.json')));
    res.end();
})

module.exports = router;