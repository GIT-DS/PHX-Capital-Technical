const express = require("express");
const router = express.Router();
const mongoose = require('mongoose')
const passport = require('passport')

const Account = require('../../models/Account')
const validateAccountInput = require('../../validation/account')

router.get('/', (req, res) => {
    Account.find()
        .then(accounts => res.json(accounts))
        .catch( err => res.status(404).json({ noAccountsFound: 'No Accounts found' }))
});

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
                    address: req.body.addreses
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
        
                newAccount.save().then( account => res.json(account))
            }

        })
    }

);



module.exports = router;