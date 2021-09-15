const WilderModel = require('../models/wilders');

module.exports = {
    create: (req, res) => {
        let wilder = new WilderModel({
            name: req.body.name,
            lastname: req.body.lastname,
            age: req.body.age
        })
        wilder.save()
            .then(result => {
                res.json({result, success: true})
            }).catch(e => {
                res.json({err, success: false})
        })
    },

    update: (req, res) => {
        WilderModel.updateOne({_id: req.params.id}, req.body)
            .then(wilder => {
                if (!wilder) res.json({ success: false, result: "No such wilder exists"})
                res.json({wilder})
            })
            .catch(err => {
                res.json({ success: false, result: err})
            })
    },

    find: (req, res) => {
        WilderModel.find()
            .then(wilders => {
                if (!wilders) res.json({ success: false, 'result': "No wilders found"})
                res.json({ sucess: true, wilders})
            })
            .catch(err => {
                res.json({ success: false, result: err})
                console.log(err);
            })
    },

    findOne: (req, res) => {
        WilderModel.findOne({_id: req.params.id})
            .then(wilder => {
                if (!wilder) res.json({ success: false, 'result': "No wilder found"})
                res.json({ sucess: true, wilder})
            })
            .catch(err => {
                res.json({ success: false, result: err})
                console.log(err);
            })
    },

    delete: (req, res) => {
        WilderModel.remove({ _id: req.params.id})
            .then(wilder => {
                if (!wilder) res.json({ success: false, result: "No wilder with such ID was found" })
                res.json({ success: true, wilder })
            })
            .catch(err => res.json({success: false, result: err}))
    }
}