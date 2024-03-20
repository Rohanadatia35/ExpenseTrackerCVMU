const mongoose = require('mongoose');

const SetLimitSchema=new mongoose.Schema({
    limit:{
        type:Number,
        required: true,
        default: 10000,
        maxLength: 20,
        trim: true
    }
});
const SetLimitModel=mongoose.model("Limit",SetLimitSchema);

module.exports= SetLimitModel;
