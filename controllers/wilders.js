const WilderModel = require('../models/wilders');

module.exports = {
    create: async (req, res) => {
        try{
            let wilder = new WilderModel({
                name: req.body.name,
                lastname: req.body.lastname,
                age: req.body.age
            })
            const result = await wilder.save();
            return res.json({result, success: true})
        }catch(e) {
            return res.json({e, success: false})
        }
    },

    update: async (req, res) => {
        try{
            const result = await WilderModel.updateOne({_id: req.params.id}, req.body)
            if (!wilder) return res.json({ success: false, result: "No such wilder exists"})
            return res.json({result})
        }catch(e){
            return res.json({ success: false, result: e})
        }
    },

    find: async (req, res) => {
        try{
            const result = await WilderModel.find();
            if (!wilders) return res.json({ success: false, 'result': "No wilders found"})
            return res.json({ sucess: true, result})
        }catch(e){
           return res.json({ success: false, result: e})
        }
    },

    findOne: async (req, res) => {
        try{
            const result = await WilderModel.findOne({_id: req.params.id});
            if (!wilder) return res.json({ success: false, 'result': "No wilder found"})
            return res.json({ sucess: true, result})
        }catch(e){
            return res.json({ success: false, result: e})
        }
    },

    delete: async (req, res) => {
        try{
            const result = await WilderModel.remove({ _id: req.params.id})
            if (!result) return res.json({ success: false, result: "No wilder with such ID was found" })
            return res.json({ success: true, result })
        }catch(e){
            return res.json({success: false, result: e})
        }
    }
}