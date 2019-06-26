const joi = require('joi');

exports.createUser = {
    body : {
        email : joi.string().trim().email().required(),
        username : joi.string().regex(/[a-zA-Z0-9_]$/).max(25).min(3).trim().required(),
        password : joi.string().regex(/[a-zA-Z0-9]$/).max(15).min(3).trim().required(),
    }
}