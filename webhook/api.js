const app = require('express')();
const PORT = process.env.port || 3000;

app.listen(PORT, () => {
    console.log(`webhook api listen on ${PORT}`);
})


const cmd = {
    pull : 'git pull origin',
    build : 'npm run build',
}


app.get('/webhook',(req,res)=>{
    console.log('WebHookk')
    console.log(req)
})
