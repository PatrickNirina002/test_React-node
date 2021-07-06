var validateRegisterInput = require("../validation/register")
var validateLoginInput = require("../validation/login")
var User = require("../Models/auth")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
exports.signup =  (req, res)=> {
    console.log("eerre")
    User.find().then(use=>{
       const { errors, isValid } = validateRegisterInput(req.body);
       if(!isValid) {
           return res.status(400).json(errors);
       }
       User.findOne({
           email: req.body.email
       }).then(user => {
           
           if(user) {
               return res.status(400).json({
                   email: 'Email already exists'
               });
           }
           else {
               const newUser = new User({
                   username: req.body.username,
                   email:req.body.email,
                   password:req.body.password
               });
               
               bcrypt.genSalt(10, (err, salt) => {
                   if(err) console.error('There was an error', err);
                   else {
                       bcrypt.hash(newUser.password, salt, (err, hash) => {
                           if(err) console.error('There was an error', err);
                           else {
                               newUser.password = hash;
                               newUser
                                   .save()
                                   .then(user => {
                                       console.log(user)
                                       res.json(user)
                                   }); 
                           }
                       });
                   }
               });
           }
       });
   });
   }
   //router.post('/login', 
exports.login= (req, res) => {

    const { errors, isValid } = validateLoginInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email})
        .then(user => {
            if(!user) {
                errors.email = 'User not found'
                return res.status(404).json(errors);
            }
            bcrypt.compare(password, user.password)
                    .then(isMatch => {
                        if(isMatch) {
                            const payload = {
                                username: user.username,
                                email: user.email
                            }
                            jwt.sign(payload, 'secret', {
                                expiresIn: 3600
                            }, (err, token) => {
                                if(err) console.error('There is some error in token', err);
                                else {
                                    res.json({
                                        username: user.username,
                                        success: true,
                                        token: `Bearer ${token}`
                                    });
                                }
                            });
                        }
                        else {
                            errors.password = 'Incorrect Password';
                            return res.status(400).json(errors);
                        }
                    });
        });
}