const express = require("express");
const router = express.Router();
const mongoose = require('mongoose')
const passport = require('passport')

const Account = require('../../models/Account');
const LandHolding = require("../../models/LandHolding");
const validateAccountInput = require('../../validation/account')

router.get('/:userId/find', (req, res) => {
    Account.find()
        .then(accounts => {
            let filteredAccounts = accounts.filter(account => account.ownerId.toString() === req.params.userId.toString())
            res.json(filteredAccounts)
        })
        .catch( err => res.status(404).json({ noAccountsFound: 'No Accounts found' }))
});

router.get('/:id', (req, res) => {
    Account.findById(req.params.id).then(account => {
        let acc = {
            name: account.name,
            entityType: account.entityType,
            ownerType: account.ownerType,
            ownerId: account.ownerId,
            address: account.address,
            numLandHoldings: account.numLandHoldings
        }
        return acc;
    })
})

router.post('/create', 
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const {errors, isValid} = validateAccountInput(req.body);
        if (!isValid){
            return res.status(400).json(errors)
        }

        Account.findOne({ name: req.body.name }).then(name => {
            if (name) {
              errors.name = "Account with this name already exists";
              return res.status(400).json(errors);
            } else {
                const newAccount = new Account({
                    name: req.body.name,
                    entityType: req.body.entityType,
                    ownerType: req.body.ownerType,
                    ownerId: req.body.ownerId,
                    address: req.body.address,
                    numLandHoldings: req.body.numLandHoldings,
                });
        
                newAccount.save().then( account => res.json(account))
            }

        })
    }
);

router.patch('/update/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const {errors, isValid} = validateAccountInput(req.body);
        if (!isValid){
            return res.status(400).json(errors)
        }

        Account.findById(req.params.id).then(account => {
            if (!account) {
                errors.account = "An account with that ID does not exist";
            return res.status(404).json(errors);
            } else {
                account.name = req.body.name;
                account.entityType = req.body.entityType;
                account.ownerType = req.body.ownerType;
                account.address = req.body.address;
                account.ownerId = req.body.ownerId;
                account.numLandHoldings = req.body.numLandHoldings
        
                account.save().then( account => res.json(account))
            }

        })
    }

);

router.delete('/delete/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        let acc = Account.findById(req.params.id).then((account) => {
        if (account.id != req.account.id) {
            return res
            .status(400)
            .json({ cannotdelete: 'You can only delete your own accounts' });
        } else {
            
            Account.deleteOne({ _id: req.params.id }).then(()=>LandHolding.find().forEach(landholding => landholding.delete({account: acc})))
            .then(() => {
            return res.status(200).json({ success: "Account and it's associated Land Holdings deleted" });
            });
        }
        });
    }

)

module.exports = router;