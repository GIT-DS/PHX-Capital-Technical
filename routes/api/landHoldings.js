const express = require("express");
const router = express.Router();
const mongoose = require('mongoose')
const passport = require('passport')

const LandHolding = require("../../models/LandHolding");
const validateLandHoldingInput = require('../../validation/landHolding')

router.get('/:userId/find', (req, res) => {
    LandHolding.find()
    .then(landHoldings => {
        let filteredLandHoldings = landHoldings.filter(landholding => landholding.ownerId.toString() === req.params.userId.toString())
        res.json(filteredLandHoldings)
    })
        .catch( err => res.status(404).json({ noLandHoldingsFound: 'No Land Holdings found' }))
});

router.get('/:id', (req, res) => {
    LandHolding.findById(req.params.id).then(landHolding => {
        let land = {
            name: landHolding.name,
            account: landHolding.account,
            ownerId: req.body.ownerId,
            legalEntity: landHolding.legalEntity,
            netMineralAcres: landHolding.netMineralAcres,
            mineralOwnerRoyalty: landHolding.mineralOwnerRoyalty,
            sectionName: landHolding.sectionName,
            section: landHolding.section,
            township: landHolding.township,
            range: landHolding.range,
            titleSource: landHolding.titleSource,
        }
        return res.json(land)
    })
})


router.post('/create', 
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const {errors, isValid} = validateLandHoldingInput(req.body);
        console.log(req.body.mineralOwnerRoyalty)
        if (!isValid){
            return res.status(400).json(errors)
        }

        LandHolding.findOne({ name: req.body.name }).then(name => {
            if (name) {
              errors.name = "Account with this name already exists";
              return res.status(400).json(errors);
            } else {
                const newLandHolding = new LandHolding({
                    name: req.body.name,
                    account: req.body.account,
                    ownerId: req.body.ownerId,
                    legalEntity: req.body.legalEntity,
                    netMineralAcres: req.body.netMineralAcres,
                    mineralOwnerRoyalty: req.body.mineralOwnerRoyalty,
                    sectionName: req.body.sectionName,
                    section: req.body.section,
                    township: req.body.township,
                    range: req.body.range,
                    titleSource: req.body.titleSource,
                });
        
                newLandHolding.save().then( landHolding => res.json(landHolding))
            }

        })
    }
);

router.patch('/update/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const {errors, isValid} = validateLandHoldingInput(req.body);
        if (!isValid){
            return res.status(400).json(errors)
        }

        LandHolding.findById(req.params.id).then(landHolding => {
            if (!landHolding) {
                errors.landHolding = "A Land Holding with that ID does not exist";
            return res.status(404).json(errors);
            } else {
                landHolding.name = req.body.name;
                landHolding.account = req.body.account;
                landHolding.ownerId = req.body.ownerId;
                landHolding.legalEntity = req.body.legalEntity;
                landHolding.netMineralAcres = req.body.netMineralAcres;
                landHolding.mineralOwnerRoyalty = req.body.mineralOwnerRoyalty;
                landHolding.sectionName = req.body.sectionName;
                landHolding.section = req.body.section;
                landHolding.township = req.body.township;
                landHolding.range = req.body.range;
                landHolding.titleSource = req.body.titleSource;
        
                landHolding.save().then( landHolding => res.json(landHolding))
            }

        })
    }

);

router.delete('/delete/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        LandHolding.findById(req.params.id).then((landHolding) => {
        if (landHolding._id != req.params.id) {
            return res
            .status(400)
            .json({ cannotdelete: 'You can only delete your own land holdings' });
        } else {
            
            LandHolding.deleteOne({ _id: req.params.id })
            .then(() => {
            return res.status(200).json({ success: "Land Holdings successfully deleted" });
            });
        }
        });
    }

)

module.exports = router;