const UserModel = require('../../Model/UserModel');

exports.getAllUserData = async function (req, res) {
    return res.send(req.user);
}

exports.ConsumeResource = async function (req, res) {
    return res.send('testing')
    var data = { stone: 100, copper: 100 };

    //console.log(req.user)
    // UserModel.mapReduce(o,)

    var Sourcekey = Object.keys(data);
    Sourcekey.forEach((ele)=>{
        data_res[ele] -= data[keys] 
    })

    console.log(data_res)
    return res.send(data_res)
} 
