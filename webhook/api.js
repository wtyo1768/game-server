const app = require('express')();
const PORT = process.env.port || 3000;
const { exec } = require('child_process');

app.listen(PORT, () => {
    console.log(`webhook api listen on ${PORT}`);
})

const cd = 'cd ~/../home/wtyo1768';
const cmd = {
    pull: `${cd}/kyronus && git pull origin`,
    rebuild: `${cd}/kyronus  && npm run build`,
    nginx_rebuild: `${cd}/`
}


app.get('/webhook', (req, res) => {
    console.log('WebHookk')
    console.log(req)
    exec(cmd.pull, (err, stdout, stderr) => {
        if (err) {
            console.log(err)
            res.status(500).end();
        }
        else {
            console.log(stdout)
            exec(cmd.rebuild, (err, stdout, stderr) => {
                if (err) {
                    console.log(err)
                    res.status(500).end();
                }
                else {
                    console.log(stdout)
                }
            })
        }
    })
})
