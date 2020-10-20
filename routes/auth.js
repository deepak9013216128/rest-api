const express = require('express');
const { body } = require('express-validator');

const authConrtoller = require('../controllers/auth');
const User = require('../models/user');

const router = express.Router();

router.put('/signup', [
  body('email').isEmail()
    .withMessage('Please enter a valid emial.')
    .custom((value, { res }) => {
      return User.findOne({ email: value }).then(userDoc => {
        if (userDoc) {
          return Promise.reject('Email address already exits!')
        }
        return true;
      })
    })
    .normalizeEmail(),
  body('password')
    .trim()
    .isLength({ min: 5 }),
  body('name')
    .trim()
    .not()
    .isEmpty()

], authConrtoller.signup);

router.post('/login', authConrtoller.login)

module.exports = router;