const app = require('express')();
const PORT = process.env.port || 3000;
const { exec } = require('child_process');

app.listen(PORT, () => logger.info(`webhook api listen on ${PORT}`))

const cd = 'cd ~/../home/wtyo1768';
const cmd = {
    pull: `${cd}/kyronus && git pull origin master`,
    rebuild: `${cd}/kyronus  && npm run build`,
    nginx_rebuild: `${cd}/kyronus-server/webhook && sh ./sh/rebuild.sh `
}

app.post('/webhook', (req, res) => {
    res.end();
    logger.info('WebHookk')
    logger.info(req.headers['x-gitlab-token'])
    exec(cmd.pull, (err, stdout, stderr) => {
        if (err) {
            logger.info(err)
            res.status(500).end();
        }
        else {
            logger.info(stdout)
            exec(cmd.rebuild, (err, stdout, stderr) => {
                if (err) {
                    logger.info(err)
                    res.status(500).end();
                }
                else {
                    logger.info(stdout)
                    exec(cmd.nginx_rebuild, (err, stdout, stderr) => {
                        if (err) {
                            logger.info(err)
                            res.status(500).end();
                        }
                        else {
                            logger.info(stdout)
                        }
                    })
                }
            })
        }
    })
})
