const SetLimitModel=require("../models/SetLimitModel");

module.exports.SetLimit= async (req,res)=>{
    const x = req.body.limit;
    const Limit=  new SetLimitModel({
        x
    });
    const doc =await Limit.updateOne({
        _id: "65e6990e584f429548706cd6"
    }, {
        $set: {
            limit: x

        }
    });

}
