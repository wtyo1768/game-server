const mongoose = require('mongoose');
const Types = mongoose.Schema.Types;

mongoose.set('useFindAndModify', false);

var UserSchema = new mongoose.Schema({

    facebookID: { type: Number },
    googleID: { type: Number },

    email: { type: String, required: true },
    //isverified : {type:Boolean , default :false},
    password: { type: String, required: true },
    lastLogoutTime: { type: Date },

    username: { type: String, default: "郭家銘" },
    nickname: { type: String, default: this.username },
    coin: { type: Number, default: 6000 },
    coinMax: { type: Number, default: 10000 },

    diamond: { type: Number, default: 50 },
    resourceMax: { type: Number, default: 3000 },
    resources: {
        type: Array, default:
            [{ type: '木頭', amount: 1000 }, { type: '石頭', amount: 1000 },
            { type: '鋼鐵', amount: 1000 }, { type: '銅礦', amount: 1000 },
            { type: '墨金屬', amount: 500 }, { type: '鍨金屬', amount: 500 },
            { type: '氦金屬', amount: 500 }, { type: '銝金屬', amount: 500 }],
    },
    baggage: { type: Array, default: [] },
    achievements: {
        type: Types.Mixed, default: [{
            title: '星際拓荒者', brief: '擁有第一個星球', state: true
        }]
    },
    planets: { type: Types.Mixed, default: [] },
    task: { type: Array, default: [0] },
    mission: { type: Types.Mixed, default: [] },

    detectRange: { type: Number, default: 3 },
    collectAbility: { type: Number, default: 100 },
    collectWeights: {
        type: Types.Mixed, default: [
            { type: '木頭', weights: 1 },
            { type: '石頭', weights: 0.8 },
            { type: '鋼鐵', weights: 0.5 },
            { type: '銅礦', weights: 0.2 }
        ]
    },
    collectorMax: { type: Number, default: 2 },
    coolDownGrid: { type: Types.Mixed, default: [] },

    isInBeginningStory: { type: Boolean, default: true },
    isBeginner: { type: Boolean, default: true },
    currentBeginnerGuideScenes: { type: Number, default: 0 },

    uid: { type: Number },
    friends: { type: Array, default: [] },
    friendInvitations: { type: Array, default: [] }

}, { collection: 'User' });


UserSchema.pre('save', async function (next) {
    // give him uid when sign up 
    if (this.isModified('password')) {
        do {
            let firstNum = Math.ceil(10000000);
            let uid = firstNum + Math.floor(Math.random() * 1000 * 100000);
            if(uid > 99999999)
                uid -= 10000000;
            this.uid = uid;
            logger.info('signUp : ' + this.uid + ' ' + (await UserModel.findOne({ uid: this.uid })))
            //Already Exist then regenerate one
        } while ((await UserModel.findOne({ uid: this.uid })) != null)
    }
    next()
})

var UserModel = mongoose.models.User || mongoose.model('User', UserSchema);
module.exports = UserModel;