const joi = require('joi');

exports.createUser = {
    body :{
        email : joi.trim().string().email(),
        account : joi.trim().string().max(15).

    }
}