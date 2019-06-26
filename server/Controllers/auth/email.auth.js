const nodemailer = require("nodemailer")

exports.verifyEmail =  function (UserDat1a) {
    const UserData = {
        username: 'rock',
        email: "wtyo1768@gmail.com"
    }
    console.log('creating')

    const transporter = nodemailer.createTransport({
        port : 3001,
        service: 'Gmail',
        auth: {
            user: "wtyo1768@gmail.com",
            pass: "moto12493065",
        },
    })
    console.log('opt')
    const mailOptions = {
        from: "wtyo1768@gmail.com",
        to: UserData.email,
        subject: 'Account Verification Token',
        text: 'Hello,\n\n' + UserData.username +
            'Please verify your account by clicking the link: \nhttp:\/\/' +
            'host' + '\/confirmation\/' + 'token' + '.\n'
    };
    console.log('Sending...')
    transporter.sendMail(mailOptions, function (err) {
        if (err)
            return console.log(err)
        else
            console.log('sended')
    }); 
}